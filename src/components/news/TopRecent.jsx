import React from 'react'
import SidebarItemHeader from './SidebarItemHeader'
import Classes from '../scss/news/TopRecent.module.scss'
import TopRecentItem from './TopRecentItem'
const TopRecent = () => {
  return (
    <>
      <SidebarItemHeader />
      <div className={`${Classes.topRecent} p-4 position-relative mb-5`}>
        <TopRecentItem />
        <TopRecentItem />
        <TopRecentItem />
      </div>
    </>
  )
}

export default TopRecent
