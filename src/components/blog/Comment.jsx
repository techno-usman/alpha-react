import React from 'react'
import BannerOneImg from '../../assets/images/banner.webp'
import Classes from '../scss/blog/Comments.module.scss'

const Comment = () => {
  return (
    <div className={`${Classes.commentWrapper} d-flex gap-2 gap-md-4 mb-5`}>
      <div>
        <img
          src={BannerOneImg}
          alt='BannerOneImg'
          className={Classes.userImg}
        />
      </div>
      <div style={{ flex: '1' }}>
        <div
          className={`d-flex justify-content-between align-items-center flex-wrap gap-3 mb-1 ${Classes.commentMetaInfo}`}
        >
          <span>01. 05.2018</span>
          <span>REPLY</span>
        </div>
        <p className={Classes.userName}>MIKLE LOVES</p>
        <p className={Classes.userMsg}>
          For good, too; though, in consequence of my previous emotions, I was
          still occasionally seized with a stormy sob . After we had jogged on
          for some little time, I asked the carrier.
        </p>
      </div>
    </div>
  )
}

export default Comment
