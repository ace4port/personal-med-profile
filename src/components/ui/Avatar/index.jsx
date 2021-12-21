import React from 'react'

/**
 *
 * @param {large, medium, small} size
 * @returns
 */
const Avatar = ({ thumb, size }) => {
  const image = thumb ?? 'https://foton.qodeinteractive.com/wp-content/uploads/2018/07/author-blog.png'
  return (
    <div className={`avatarContainer ${size}`}>
      <img src={image} className="avatar" alt="avatar" />
    </div>
  )
}

export default Avatar

/**
120 X 120
40 X 40
24X 24
*/
