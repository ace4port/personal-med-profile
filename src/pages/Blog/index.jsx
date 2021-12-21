import React from 'react'

import BlogHead from 'components/_blog/BlogHead'
import BlogBody from 'components/_blog/BlogBody'
import BlogBottom from 'components/_blog/BlogBottom'
import CommentSection from 'components/_blog/CommentSection'

import TopPostsCard from 'components/_blog/Cards/TopPosts'
import AuthorInfoCard from 'components/_blog/Cards/AuthorInfoCard'
import CategoriesCard from 'components/_blog/Cards/CategoriesCard'

import { fetchOne } from 'api'
import useFetch from 'hooks/useFetch'
import { getDate } from 'functions/toDate'

const id = 2

const Blog = () => {
  const [data, loading, error] = useFetch(fetchOne, id)
  return (
    <div>
      {loading && <h2>Loading .... </h2>}
      {error && <h4>{error.message}</h4>}
      <div className="blog-container">
        <BlogMain blog={data} />
        <BlogAside author={data?.user} />
      </div>
    </div>
  )
}

export default Blog

const BlogMain = ({ blog }) => {
  const blogImg =
    blog.thumbnail ??
    'https://images.pexels.com/photos/8929853/pexels-photo-8929853.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  return (
    <div className="blog-container__main">
      <BlogHead
        title={blog.title}
        description={blog.description}
        blogImg={blogImg}
        category={blog?.category?.category_name}
        views={blog.views}
        created={getDate(blog?.created_at)}
        timeToRead={Math.ceil(Math.random() * 10)}
      />

      {/* To do: Create shareable links for aside buttonss */}
      <BlogBody body={blog.body} />

      <BlogBottom
        comments={blog.comments}
        likes={blog?.likes?.length}
        author={blog?.user}
        prev={blog?.previous_post}
        next={blog?.next_post}
      />

      <CommentSection />
    </div>
  )
}

const BlogAside = ({ author }) => {
  return (
    <div className="blog-container__aside">
      {/* Search bar component -- */}
      <AuthorInfoCard authorThumb={author?.avatar} name={author?.full_name} info={author?.description} />
      <CategoriesCard />
      <TopPostsCard />
      {/* <FollowUsCard /> */}
      {/* <AdCard /> */}
    </div>
  )
}

/* BLog structure --
-- Head --
title: "asdsad"
thumbnail: null
created_at: "2021-12-19T21:29:05.469212+05:45"
category: {id: 2, category_name: 'Programming'}
description: "asdasdascasca dadsca sdvsdvd sfvsddcsdcda"
views: 11

-- Body --
body: "aasdasdasdasdasdasdadasd"

-- Aside --
user: {id: 1, full_name: 'admin', avatar: '', description: ''}

-- Bottom --
comments: 0
likes: []
updated_at: "2021-12-20T09:07:44.918527+05:45"
next_post: {id: 2, title: 'asdsad', thumbnail: ''}
previous_post: {id: 2, title: 'asdsad', thumbnail: ''}

id: 2
*/
