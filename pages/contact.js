
import React, { Component } from 'react'
import axios from 'axios'

import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

class Contact extends Component {

  state = {
    email: true
    , question: true
    , submitted: null
  }


  render() {
    var submitted
    if (this.state.submitted !== null) {
      submitted = <div className="alert alert-success">
        <p>ContactForm data:</p>
        <pre><code>{JSON.stringify(this.state.submitted, null, '  ')}</code></pre>
      </div>
    }

    return <Layout title="Contact Form">
      <div className="panel panel-default">
        <div className="panel-heading clearfix">
          <h3 className="panel-title pull-left">Contact Form</h3>
          <div className="pull-right">
            <label className="checkbox-inline">
              <input type="checkbox"
                checked={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
              /> Email
            </label>
            <label className="checkbox-inline">
              <input type="checkbox"
                checked={this.state.question}
                onChange={this.handleChange.bind(this, 'question')}
              /> Question
            </label>
          </div>
        </div>
        <div className="panel-body">
          <ContactForm ref="contactForm"
            email={this.state.email}
            question={this.state.question}
            company={this.props.company}
          />
        </div>
        <div className="panel-footer">
          <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
      {submitted}
    </Layout>
  }

  handleChange = (field, e) => {
    var nextState = {}
    nextState[field] = e.target.checked
    this.setState(nextState)
  }

  handleSubmit = () => {
    if (this.refs.contactForm.isValid()) {
      this.setState({ submitted: this.refs.contactForm.getFormData() })
    }
    axios({
      url: 'https://api.mailgun.net/v3/sandbox32b8c738195149a19328dd3aa9400a1c.mailgun.org/messages',
      method: 'post',
      username:'api',
      password: 'key-3ax6xnjp29jd6fds4gc373sgvjxteol0',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Basic ${window.btoa('api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0')}`
      },
      data: {
        from: "Excited User <mailgun@some.example.org>",
        to: "amit.erandole@gmail.com",
        subject: "Hello from react app",
        text: "Testing some Mailgun awesomness!"
      }
    })
      .then(function (response) {
        console.log('SUCCESS', response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

  export default Contact;