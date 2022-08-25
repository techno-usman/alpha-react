import React from 'react'
import { Button } from 'react-bootstrap'
import Classes from '../scss/blog/PostComment.module.scss'

const PostComment = () => {
  return (
    <div className={`${Classes.postCommentWrapper} mb-5`}>
      <h1 className={`${Classes.blockTitle} mb-3`}>Post a comment</h1>
      <div className='mb-3'>
        <textarea
          className={`form-control ${Classes.commentArea} p-4`}
          placeholder='Your comment.....'
          id='exampleFormControlTextarea1'
          rows='5'
        ></textarea>
      </div>
      <div className='mb-3'>
        <input
          type='text'
          className={`form-control ${Classes.inputText}`}
          id='exampleFormControlInput1'
          placeholder='Your  First Name'
        />
      </div>
      <div className='mb-3'>
        <input
          type='email'
          className={`form-control ${Classes.inputText}`}
          id='exampleFormControlInput1'
          placeholder='Email Address'
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          className={`form-control ${Classes.inputText}`}
          id='exampleFormControlInput1'
          placeholder='Website (optional)'
        />
      </div>
      <div className={`form-check mb-3 ${Classes.checkboxItem}`}>
        <input
          type='checkbox'
          className={`form-check-input ${Classes.checkboxInput}`}
          id='exampleCheck1'
        />
        <label
          className={`form-check-label text-white text-white ${Classes.label}`}
          htmlFor='exampleCheck1'
        >
          Save my name, email and website in this browser for the next time i
          comment
        </label>
      </div>
      <div className='mt-5'>
        <Button className={Classes.submitWrapper}>Submit</Button>
      </div>
    </div>
  )
}

export default PostComment
