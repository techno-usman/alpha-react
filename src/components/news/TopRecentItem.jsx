import React from 'react'
import Classes from '../scss/news/TopRecent.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { ReactComponent as CalenderIcon } from '../../assets/svg/calender.svg'
import { ReactComponent as CommentIcon } from '../../assets/svg/comment.svg'
import { Col, Row } from 'react-bootstrap'
const TopRecentItem = () => {
  return (
    <div className={`${Classes.toprecentItem} mb-4`}>
      <Row>
        <Col lg={6}>
          <img
            src={BannerOneImg}
            className={Classes.imgItem}
            alt='BannerOneImg'
          />
        </Col>
        <Col lg={6}>
          <div>
            <h1 className={Classes.itemTitle}>
              GRAB YOUR SWORD AND FIGHT THE HORDE
            </h1>
            <div
              className={`d-flex align-items-center gap-3 mb-2 ${Classes.calenderIcon}`}
            >
              <CalenderIcon />
              <span className={`${Classes.date}`}>Sep 5, 2018</span>
            </div>
            <div
              className={`d-flex align-items-center gap-3 ${Classes.commentIcon}`}
            >
              <CommentIcon />
              <span className={`${Classes.date}`}> 7 comments</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TopRecentItem
