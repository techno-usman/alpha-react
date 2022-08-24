import React from 'react'
import Classes from '../scss/news/SidebarItemHeader.module.scss'

const SidebarItemHeader = () => {
  return (
    <div
      className={`p-4 ${Classes.itemHeader} d-flex align-items-center gap-3`}
    >
      <h3 className={`${Classes.title} mb-0`}>
        <span style={{ color: '#FC00FF' }}>LATEST</span>{' '}
        <span className='text-white'>VIDEO</span>
      </h3>
      <div className={Classes.seprator}></div>
    </div>
  )
}

export default SidebarItemHeader
