import React from 'react'
import SidebarItemHeader from './SidebarItemHeader'
import Classes from '../scss/news/TopRecent.module.scss'
import { Col, Row } from 'react-bootstrap'
import BannerOneImg from '../../assets/images/banner.webp'
const LatestScreenShot = () => {
  return (
    <>
      <SidebarItemHeader />
      <div className={`${Classes.topRecent} p-4 position-relative mb-5`}>
        <Row>
          <Col sm={6}>
            <img
              src={BannerOneImg}
              className={Classes.screenShotImg}
              alt='BannerOneImg'
            />
          </Col>
          <Col sm={6}>
            <img
              src={BannerOneImg}
              className={Classes.screenShotImg}
              alt='BannerOneImg'
            />
          </Col>
          <Col sm={6}>
            <img
              src={BannerOneImg}
              className={Classes.screenShotImg}
              alt='BannerOneImg'
            />
          </Col>
          <Col sm={6}>
            <img
              src={BannerOneImg}
              className={Classes.screenShotImg}
              alt='BannerOneImg'
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default LatestScreenShot
