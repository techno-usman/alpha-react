import React from 'react'
import Classes from '../scss/blog/FeaturedGame.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'

const FeaturedGame = () => {
  return (
    <div className={`${Classes.featuredGameWrapper}`}>
      <img src={BannerOneImg} className={Classes.imgItem} alt='BannerOneImg' />
    </div>
  )
}

export default FeaturedGame
