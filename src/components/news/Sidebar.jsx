import React from 'react'
import Classes from '../scss/news/Sidebar.module.scss'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import SubscribeNews from './SubscribeNews'
import VideoItem from './VideoItem'
import TopRecent from './TopRecent'
import LatestScreenShot from './LatestScreenShot'
import PopularBlock from './PopularBlock'

const Sidebar = () => {
  return (
    <aside className={Classes.asideWrapper}>
      <div>
        <div
          className={`${Classes.searchWrapper} py-2 px-3 d-flex align-items-center gap-2 ms-auto`}
        >
          <SearchIcon />
          <input
            placeholder='Search for Games'
            type='search'
            className={`bg-transparent ${Classes.searchInput}`}
          />
        </div>
      </div>
      <SubscribeNews />
      <VideoItem />
      <TopRecent />
      <LatestScreenShot />
      <PopularBlock />
    </aside>
  )
}

export default Sidebar
