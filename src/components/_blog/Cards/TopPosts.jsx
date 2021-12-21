import React from 'react'

const imgPlaceholder = 'https://networkertheme.com/gearbox/wp-content/uploads/sites/21/demo-image-00026-800x533.jpg'

const TopPostsCard = ({
  posts = [{ thumb: imgPlaceholder, title: 'Best Tech & Accessories: 10 Essentials this Year', views: 420 }],
}) => {
  return (
    <div className="card blog__featured">
      {posts.map((post, index) => (
        <PostCard key={index} thumb={post.thumb} title={post.title} views={post.views} />
      ))}
    </div>
  )
}

export default TopPostsCard

const PostCard = ({ thumb, title, views }) => (
  <div className="postCard">
    <img src={thumb} alt={title} width="40%" />
    <h4>{title}</h4>
    <p>{views}</p>
  </div>
)
