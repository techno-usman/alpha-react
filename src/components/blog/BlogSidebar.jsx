import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import Classes from '../scss/news/Sidebar.module.scss'
import ArticleItem from './ArticleItem'
import Categories from './Categories'
import TagsBlock from './TagsBlock'
import FeaturedGame from './FeaturedGame'
import RecommendedItem from './RecommendedItem'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
const BlogSidebar = () => {
  return (
    <aside className={`${Classes.blogSidebarWrapper} mb-5`}>
      <div className='mb-4'>
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
      <div className={`${Classes.blogSidebarInner} p-4`}>
        <div>
          <h3 className={`${Classes.topicTitle} mb-3`}>
            <span style={{ color: '#FC00FF' }}>TOP</span>{' '}
            <span className='text-white'>ARTICLES</span>
          </h3>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
        <div>
          <Categories />
          <TagsBlock />
        </div>
        <div>
          <h3 className={`${Classes.topicTitle} mb-3 mt-5`}>
            <span style={{ color: '#FC00FF' }}>FEATURED</span>{' '}
            <span className='text-white'>GAMES</span>
          </h3>
          <FeaturedGame />
        </div>
        <div className={Classes.followBlockWrapper}>
          <h3 className={`${Classes.titleItem} text-white`}>FOLLOW US</h3>
          <div className='d-flex flex-wrap gap-2'>
            <FacebookIcon />
            <Linkedin />
            <Twitter />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <div>
          <h3 className={`${Classes.topicTitle} mb-3 mt-5`}>
            <span style={{ color: '#FC00FF' }}>POPULAR </span>{' '}
            <span className='text-white'>RECOMMENDED</span>
          </h3>
          <RecommendedItem />
          <RecommendedItem />
        </div>
      </div>
    </aside>
  )
}

export default BlogSidebar
