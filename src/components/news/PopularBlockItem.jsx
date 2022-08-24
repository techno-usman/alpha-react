import React from 'react'
import Classes from '../scss/news/TopRecent.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { ReactComponent as FillStar } from '../../assets/svg/likeStar.svg'
import { ReactComponent as GrayStar } from '../../assets/svg/unLikeStar.svg'
import { Col, Row } from 'react-bootstrap'
const PopularBlockItem = () => {
  return (
    <div className={`${Classes.toprecentItem} mb-4`}>
      <Row className='align-items-center'>
        <Col lg={6}>
          <img
            src={BannerOneImg}
            className={Classes.imgItem}
            alt='BannerOneImg'
          />
        </Col>
        <Col lg={6}>
          <div>
            <h1 className={Classes.itemTitle}>I LOVE MOUNTAINS I LOVE THEM</h1>
          </div>
          <div className='d-flex mb-3 gap-2'>
            <FillStar />
            <FillStar />
            <FillStar />
            <GrayStar />
            <GrayStar />
          </div>
          <span className={`text-white ${Classes.price}`}>$55</span>
        </Col>
      </Row>
    </div>
  )
}

export default PopularBlockItem
