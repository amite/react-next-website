import React, { Component } from 'react'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

class About extends Component {
  render() {
    return (
      <Layout>
        <h1>About Us</h1>
        <Banner img={'about-bg.jpg'} />
        <h3>In your time, yes, but nowadays shut up! Besides, these are adult stemcells, harvested from perfectly healthy adults whom I killed for their stemcells.</h3>
        <p>You can see how I lived before I met you. Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", I mean Robot Devil. And by "metaphorically", I mean get your coat.</p>
      </Layout>
    )
  }
}

export default About