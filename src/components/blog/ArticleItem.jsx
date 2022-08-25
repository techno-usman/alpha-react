import React from 'react'
import Classes from '../scss/blog/ArticleItem.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { Col, Row, Button } from 'react-bootstrap'

const ArticleItem = () => {
  return (
    <div className={`${Classes.itemWrapper} mb-4`}>
      <Row className='align-items-center'>
        <Col lg={6}>
          <img
            src={BannerOneImg}
            className={Classes.itemImg}
            alt='BannerOneImg'
          />
        </Col>
        <Col lg={6}>
          <div>
            <h1 className={Classes.topicTitle}>
              North Mountains Explore by Irfan
            </h1>
            <Button className={Classes.dateItem}>10 December 2018</Button>
            <div className='mt-2'>
              <span className='text-white'>By:</span>{' '}
              <span style={{ color: '#F15F79' }}>IRFAN SAEED</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ArticleItem
