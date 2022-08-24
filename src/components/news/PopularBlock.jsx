import React from 'react'
import SidebarItemHeader from './SidebarItemHeader'
import Classes from '../scss/news/TopRecent.module.scss'
import PopularBlockItem from './PopularBlockItem'
const PopularBlock = () => {
  return (
    <>
      <SidebarItemHeader />
      <div className={`${Classes.topRecent} p-4 position-relative mb-5`}>
        <PopularBlockItem />
        <PopularBlockItem />
        <PopularBlockItem />
      </div>
    </>
  )
}

export default PopularBlock
