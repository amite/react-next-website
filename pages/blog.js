import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import BlogList from '../components/BlogList'


class Blog extends Component {

  defaultProps = { posts: [] }

  static async getInitialProps () {
    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts?_limit=10')
    return { posts: data }
  }

  render() {
    return (
      <Layout title="My Blog">
        <h1>Welcome To My Blog</h1>
        <Banner img={'sample-blog-image.jpg'} />
        <h3>At the heart of great content is powerful writing. If you don’t consider yourself a writer or you’re just starting out, we’ve got you covered.</h3>
        <p>The free information on our Copyblogger blog will help you get started mastering content marketing so you can use it in your own business, or for a client.</p>
        
        <BlogList posts={this.props.posts} />
      </Layout>
    )
  }
}

export default Blog