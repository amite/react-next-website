import React, { Component } from 'react'
import Link from 'next/link'

class Post extends Component {

  render () {
    
    const { id, title, body } = this.props.post

    return (
      <div className="post">
        <h3>
          <Link href={`/post?id=${id}`} as={`/post/${id}`} >
            <a>{title}</a>
          </Link>
        </h3>
        <div className="post-body">
          <p>{body}</p>
        </div>
        <style>{`
          a { 
            color: #345e82;
            transition: 0.3s all;
          }

          a:hover {
            text-decoration: none;
            color: grey;
          }
        `}</style>
        <hr />
      </div>
    )
  }
}

export default Post