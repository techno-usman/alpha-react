import React from 'react'
import { Button } from 'react-bootstrap'
import Classes from '../scss/news/SubscribeNews.module.scss'

const SubscribeNews = () => {
  return (
    <div className={`${Classes.subscribeNewsWrapper} p-4 mb-5 mt-4`}>
      <h1 className={`${Classes.blockTitle} text-white`}>
        Get Updates by subscribing our newsletter
      </h1>
      <p className={Classes.blockDescription}>
        Do not want to miss news, updates, notice or any offer on our products,
        then please subscribe to our mailing list.
      </p>
      <div className='mb-2'>
        <label htmlFor='inputPassword5' className={`${Classes.label} mb-1`}>
          Full Name
        </label>
        <input
          type='text'
          id='fulName'
          className={`form-control ${Classes.inputItem}`}
          placeholder='Enter your name'
        />
      </div>
      <div>
        <label htmlFor='inputPassword5' class={`${Classes.label} mb-1`}>
          Email
        </label>
        <input
          type='text'
          id='fulName'
          className={`form-control ${Classes.inputItem}`}
          placeholder='Enter your email adress'
        />
      </div>
      <div>
        <div className='my-3 form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='exampleCheck1'
          />
          <label
            className='form-check-label text-white text-white'
            htmlFor='exampleCheck1'
          >
            I agree with terms and agreement
          </label>
        </div>
      </div>
      <Button className={Classes.subscribeBtn}>Suscribe</Button>
    </div>
  )
}

export default SubscribeNews
