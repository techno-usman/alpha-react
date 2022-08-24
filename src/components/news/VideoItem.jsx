import React from 'react'
import SidebarItemHeader from './SidebarItemHeader'
import Classes from '../scss/news/VideoItem.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { ReactComponent as PlayIcon } from '../../assets/svg/play.svg'

const VideoItem = () => {
  return (
    <>
      <SidebarItemHeader />
      <div className={`${Classes.videoItem} p-4 position-relative mb-5`}>
        <img src={BannerOneImg} className={Classes.imgItem} alt='Video' />
        <span
          className={`${Classes.playIcon} d-flex justify-content-center align-items-center`}
        >
          <PlayIcon />
        </span>
      </div>
    </>
  )
}

export default VideoItem
