import React from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default class extends React.Component {
  static async getInitialProps ({ query: { id } }) {
    const { data } = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    return { data }
  }

  render () {
    const { title, body } = this.props.data
    return <Layout title={title}>
      <h1>{title}</h1>
      <Banner img={'photo-sample-image.jpg'} />
      <br/>
      <p>
        {body}
      </p>
    </Layout>
  }
}