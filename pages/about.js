import React, { Component } from 'react'
import Link from 'next/link'

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <nav className="navbar navbar-default navbar-custom">
            <div className="container-fluid">

              <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="/">React Next</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="post.html">Sample Post</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>

            </div>

          </nav>
          <h1>About Us</h1>
          <img src="./static/img/about-bg.jpg" className="img-responsive" />
          <h3>In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.</h3>
          <p>You can see how I lived before I met you. Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", I mean Robot Devil. And by "metaphorically", I mean get your coat.</p>
        </div>
      </div>
    )
  }
}

export default About