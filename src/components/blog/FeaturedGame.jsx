import React from 'react'
import Classes from '../scss/blog/FeaturedGame.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'

const FeaturedGame = () => {
  return (
    <div className={`${Classes.featuredGameWrapper}`}>
      <div className='mb-4'>
        <img
          src={BannerOneImg}
          className={Classes.imgItem}
          alt='BannerOneImg'
        />
      </div>
      <div className='mb-4'>
        <img
          src={BannerOneImg}
          className={Classes.imgItem}
          alt='BannerOneImg'
        />
      </div>
    </div>
  )
}

export default FeaturedGame
