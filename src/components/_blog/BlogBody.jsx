import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const BlogBody = ({ body }) => {
  return (
    <div className="blogbody">
      <div className="blogbody__aside">
        <p>
          <FaFacebook />
        </p>
        <p>
          <FaTwitter />
        </p>
        <p>
          <FaLinkedin />
        </p>
      </div>
      <div className="blogbody__main">
        <p>{body}</p>
      </div>
    </div>
  )
}

export default BlogBody
