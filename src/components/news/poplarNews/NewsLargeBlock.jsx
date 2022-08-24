import React from 'react'
import BannerOneImg from '../../../assets/images/banner.webp'
import Classes from '../../scss/news/NewsLargeBlock.module.scss'
import { ReactComponent as CalenderIcon } from '../../../assets/svg/calender.svg'
import { ReactComponent as CommentIcon } from '../../../assets/svg/comment.svg'
import BlueEllipsis from '../../common/BlueEllipsis'
const NewsLargeBlock = () => {
  return (
    <div className={`${Classes.newsLargeBlockWrapper} my-5 position-relative`}>
      <div className='mb-3'>
        <img
          src={BannerOneImg}
          alt='BannerOneImg'
          className={Classes.cardImg}
        />
      </div>
      <div className={Classes.cardBody}>
        <h1 className={`text-white ${Classes.title}`}>
          GRAB YOUR SWORD AND FIGHT THE HORDE
        </h1>
        <div className='d-flex gap-2 gap-lg-5 align-items-center flex-wrap my-2'>
          <div className='d-flex align-items-center gap-3'>
            <CalenderIcon />
            <span className={`${Classes.date}`}>Sep 5, 2018</span>
          </div>
          <div className='d-flex align-items-center gap-3'>
            <CommentIcon />
            <span className={`${Classes.date}`}> 7 comments</span>
          </div>
        </div>
        <p className={`text-white ${Classes.description}`}>
          For good, too; though, in consequence of my previous emotions, I was
          still occasionally seized with a stormy sob . After we had jogged on
          for some little time, I asked the carrier...
        </p>
      </div>
      <BlueEllipsis className={Classes.blueEllipsis} />
    </div>
  )
}

export default NewsLargeBlock
