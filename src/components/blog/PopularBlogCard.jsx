import React from 'react'
import Classes from '../scss/blog/PopularBlog.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { Row, Col, Button } from 'react-bootstrap'

const PopularBlogCard = () => {
  return (
    <div className={`${Classes.popularBlogCardWrapper} position-relative mb-5`}>
      <img src={BannerOneImg} alt='BannerOneImg' className={Classes.cardImg} />
      <div className={`p-4 ${Classes.cardInner} position-absolute w-100`}>
        <Row>
          <Col lg={10}>
            <h3 className={`${Classes.cardTitle}`}>
              Massa tortor nibh nulla condimentum imperdiet scelerisque...
            </h3>
            <div className='d-flex flex-wrap gap-4'>
              <Button className={Classes.orangBtn}>2 Hours Ago</Button>
              <Button className={Classes.blueBtn}>CNN Indonesia</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PopularBlogCard
