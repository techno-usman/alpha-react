import React from 'react'
import Classes from '../../scss/news/HorizontolNewsCard.module.scss'
import BannerOneImg from '../../../assets/images/banner.webp'
import { ReactComponent as CalenderIcon } from '../../../assets/svg/calender.svg'
import { ReactComponent as CommentIcon } from '../../../assets/svg/comment.svg'

const HorizontolNewsCard = () => {
  return (
    <div className={`${Classes.horizontolNewsCardWrapper} p-4 mb-3`}>
      <div className='flex-column d-flex flex-lg-row align-items-center gap-4'>
        <div>
          <img
            src={BannerOneImg}
            alt='BannerOneImg'
            className={`${Classes.cardImg}`}
          />
        </div>
        <div>
          <h3 className={`${Classes.cardTitle} text-white`}>
            GRAB YOUR SWORD AND FIGHT THE HORDE
          </h3>
          <div className='d-flex gap-2 gap-lg-5 align-items-center flex-wrap my-2'>
            <div
              className={`d-flex align-items-center gap-3 ${Classes.calenderIcon}`}
            >
              <CalenderIcon />
              <span className={`${Classes.date}`}>Sep 5, 2018</span>
            </div>
            <div
              className={`d-flex align-items-center gap-3 ${Classes.commentIcon}`}
            >
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
      </div>
    </div>
  )
}

export default HorizontolNewsCard
