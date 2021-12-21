import React from 'react'
import { FiBarChart2 } from 'react-icons/fi'
import { MdAccessTime } from 'react-icons/md'
import { BsCalendarFill } from 'react-icons/bs'

const BlogHead = ({ blogImg, title, description, category, views, timeToRead, created }) => {
  return (
    <div className="bloghead">
      <div className="bloghead__top">
        <p className="feature">{category}</p>
        <p className="views">
          <FiBarChart2 />
          {views} views
        </p>
        <p className="time">
          <MdAccessTime />
          {timeToRead + ' min read'}
        </p>
        <p className="time">
          <BsCalendarFill />
          {created}
        </p>
      </div>
      {/* <h1 className="blog__title">{'What Would It Take to Shut Down the Entire Internet?'}</h1> */}
      <h1 className="blog__title">{title}</h1>
      <h5 className="blog__title">{description}</h5>
      <img className="blog__img" src={blogImg} alt="blog featured" />
    </div>
  )
}

export default BlogHead
