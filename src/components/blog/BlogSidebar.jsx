import React from 'react'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'
import Classes from '../scss/news/Sidebar.module.scss'
import ArticleItem from './ArticleItem'
import Categories from './Categories'
import TagsBlock from './TagsBlock'
import FeaturedGame from './FeaturedGame'
const BlogSidebar = () => {
  return (
    <aside className={Classes.blogSidebarWrapper}>
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
          <h3 className={`${Classes.topicTitle} my-3`}>
            <span style={{ color: '#FC00FF' }}>FEATURED</span>{' '}
            <span className='text-white'>GAMES</span>
          </h3>
          <FeaturedGame />
        </div>
      </div>
    </aside>
  )
}

export default BlogSidebar
