import React from 'react'
import Classes from '../scss/blog/Comments.module.scss'
import Comment from './Comment'
import PostComment from './PostComment'

const Comments = () => {
  return (
    <div className={`${Classes.commentsWrapper} mt-4`}>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <span className={Classes.blockTitle}>Comments</span>
        <span className={`${Classes.viewAll} text-white`}>View All</span>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <PostComment />
    </div>
  )
}

export default Comments
