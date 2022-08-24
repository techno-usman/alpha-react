import React from 'react'
import BannerOneImg from '../../../assets/images/banner.webp'
import Classes from '../../scss/news/GameReviewCard.module.scss'

const GameReviewCard = () => {
  return (
    <div className={`${Classes.gameReviewCardWrapper} p-4`}>
      <div className='mb-3'>
        <img
          src={BannerOneImg}
          className={Classes.cardImg}
          alt='BannerOneImg'
        />
      </div>
      <div>
        <h1 className='d-flex justify-content-between align-items-center gap-2 flex-wrap mb-3'>
          <span className={Classes.title}>THE ELDER SCROLL</span>
          <span className={Classes.rating}>Rating 5.0</span>
        </h1>
        <p className={Classes.description}>
          The Elder Scroll is the most popular are ames that your can Latest
          Mega 2019 games offer you ioous league and also alow you to make youe
          and smile{' '}
        </p>
      </div>
    </div>
  )
}

export default GameReviewCard
