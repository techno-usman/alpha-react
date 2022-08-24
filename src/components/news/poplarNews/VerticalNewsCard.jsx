import React from 'react'
import Classes from '../../scss/news/VerticalNewsCard.module.scss'
import BannerOneImg from '../../../assets/images/banner.webp'
import { ReactComponent as CalenderIcon } from '../../../assets/svg/calender.svg'
import { ReactComponent as CommentIcon } from '../../../assets/svg/comment.svg'
import { Button } from 'react-bootstrap'

const VerticalNewsCard = () => {
  return (
    <div className={`${Classes.verticalNewsCardWrapper} p-4 mb-5`}>
      <div className='mb-3'>
        <img
          className={Classes.cardImgItem}
          src={BannerOneImg}
          alt='BannerOneImg'
        />
        <div
          className={`d-flex align-items-center gap-3 p-4 ${Classes.commentIcon}`}
        >
          <CommentIcon />
          <span className={`${Classes.date}`}>7 comments</span>
        </div>
      </div>
      <div>
        <h3 className={`text-white ${Classes.cardTitle}`}>THE ELDER SCROLL</h3>
        <p className={`${Classes.cardDescription}`}>
          The Elder Scroll is the most popular are ames that your can Latest
          Mega 2019 games offer you ioous league and also alow you to make youe
          and smile{' '}
        </p>

        <div className='d-flex justify-content-between align-items-center gap-2 flex-wrap'>
          <div>
            <Button className={Classes.readmoreBtn}>Read More</Button>
          </div>
          <div
            className={`d-flex align-items-center gap-3 ${Classes.calenderIcon}`}
          >
            <CalenderIcon />
            <span className={`${Classes.date}`}>Sep 5, 2018</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalNewsCard
