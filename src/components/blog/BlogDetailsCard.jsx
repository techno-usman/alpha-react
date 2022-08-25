import React from 'react'
import Classes from '../scss/blog/BlogDetailsCard.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { ReactComponent as QouteLeft } from '../../assets/svg/qouteLeft.svg'

import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'

const BlogDetailsCard = () => {
  return (
    <div className={Classes.blogDetailsCardWrapper}>
      <div className='mb-3'>
        <img
          className={Classes.imgItem}
          src={BannerOneImg}
          alt='BannerOneImg'
        />
      </div>
      <div>
        <h1 className={`${Classes.titleItem} text-white`}>
          Secrete code, New Adventures towards Snowy Mount
        </h1>
        <div
          className={`${Classes.userInformation} d-flex align-items-center gap-3`}
        >
          <span>
            <img
              src={BannerOneImg}
              alt='BannerOneImg'
              className={Classes.userInfo}
            />
          </span>
          <div className={`${Classes.userInfoText}`}>
            By <span style={{ color: '#FF002D' }}>Irfan Saeed</span> Jan 5, 2018
          </div>
        </div>
        <p className={`${Classes.description} mt-3`}>
          For good, too; though, in consequence of my previous emotions, I was
          still occasionally seized with a stormy sob . After we had jogged on
          for some little time, I asked the carrier...For good, too; though, in
          consequence of my previous emotions, I was still occasionally seized
          with a stormy sob . After we had jogged on for some little time, I
          asked the carrier...For good, too; though, in consequence of my
          previous emotions, I was still occasionally seized with a stormy sob .
          After we had jogged on for some little time, I asked the carrier...For
          good, too; though, in consequence of my previous emotions, I was still
          occasionally seized with a stormy sob . After we had jogged on for
          some little time, I asked the carrier...
        </p>
      </div>
      <div className={`${Classes.blogDetailsQouteWrapper} mt-5`}>
        <div className={`${Classes.seprator}`}></div>
        <div className={`${Classes.qouteLeft} px-4`}>
          <QouteLeft />
        </div>
        <div className='offset-md-2'>
          <p className='text-white'>
            For good, too; though, in consequence of my previous emotions, I was
            still occasionally seized with a stormy sob . After we had jogged on
            for some little time, I asked the carrier...For good, too; though,
            in consequence of my previous emotions, I was still occasionally .
          </p>
        </div>
        <div className={`${Classes.seprator} mt-5`}></div>
        <div className={`${Classes.usernameRight} px-4`}>Irfan Saeed</div>
      </div>
      <p className={`mt-4 ${Classes.description}`}>
        For good, too; though, in consequence of my previous emotions, I was
        still occasionally seized with a stormy sob . After we had jogged on for
        some little time, I asked the carrier...For good, too; though, in
        consequence of my previous emotions, I was still occasionally seized
        with a stormy sob . After we had jogged on for some little time, I asked
        the carrier...For good, too; though, in consequence of my previous
        emotions, I was still occasionally seized with a stormy sob . After we
        had jogged on for some little time, I asked the carrier...For good, too;
        though, in consequence of my previous emotions, I was still occasionally
        seized with a stormy sob . After we had jogged on for some little time,
        I asked the carrier...
      </p>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>
        <span className={`text-white ${Classes.shareInfo}`}>SHARE:</span>
        <div className='d-flex flex-wrap gap-2'>
          <FacebookIcon />
          <Linkedin />
          <Twitter />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  )
}

export default BlogDetailsCard
