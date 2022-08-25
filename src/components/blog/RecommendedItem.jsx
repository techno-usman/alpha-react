import React from 'react'
import Classes from '../scss/blog/RecommendedItem.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'

const RecommendedItem = () => {
  return (
    <div className={`${Classes.recommendedItemWrapper} mb-3`}>
      <div className='mb-3'>
        <img
          src={BannerOneImg}
          alt='BannerOneImg'
          className={Classes.imgItem}
        />
      </div>
      <div className='d-flex justify-content-between flex-wrap align-items-center'>
        <span className={Classes.titleItem}>THE ELDER SCROLL</span>
        <span className={Classes.metaInfo}>PC/XBOX/PS4</span>
      </div>
    </div>
  )
}

export default RecommendedItem
