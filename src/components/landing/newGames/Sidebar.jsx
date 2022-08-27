import React from 'react'
import Classes from '../../scss/Sidebar.module.scss'
import BannerOneImg from '../../../assets/images/banner.webp';
import AchivementLargeCard from '../../../assets/images/components/achivementLargeCard.webp';
const Sidebar = () => {
  return (
    <aside className={Classes.sidebarWrapper}>
        <div className='mb-5'>
            <img src={BannerOneImg} alt='BannerOneImg' className={Classes.sidebarImg} />
        </div>{/** 
        <div>
            <img src={AchivementLargeCard} alt='AchivementLargeCard' className={Classes.sidebarImgItem} />
        </div>*/}
    </aside>
  )
}

export default Sidebar