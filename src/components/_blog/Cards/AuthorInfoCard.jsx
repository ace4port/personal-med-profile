import React from 'react'

const AuthorInfoCard = ({
  authorThumb = 'https://foton.qodeinteractive.com/wp-content/uploads/2018/06/blog-sidebar-img-1.png',
  name = 'John Doe',
  info = 'Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit diami nonum nibhie vixtus euimos vitae.',
}) => {
  return (
    <div className="card authorCard">
      <Avatar thumb={authorThumb} />
      <a href="#author">
        <h4 className="authorCard__name">{name}</h4>
      </a>
      <p className="authorCard__info">{info}</p>
    </div>
  )
}

export default AuthorInfoCard

const Avatar = ({ thumb }) => <img src={thumb} alt="author" />
