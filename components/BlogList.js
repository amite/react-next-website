import React, { Component } from 'react'
import Link from 'next/link'
import Post from './Post'

class BlogList extends Component {

  render() {

    const renderPost = (post, index) => <Post key={index} post={post} />

    return (
      <div>
        <h2>Latest Posts</h2>
        {this.props.posts.map(renderPost)}
        <style>{`
          h2 { 
            font-weight: 300;
            text-align:center;
            margin: 60px auto;
            border-bottom: 1px solid #666;
            max-width: 30%;
            padding-bottom: 20px;
          }
        `}</style>
      </div>
    )
  }
}

export default BlogList