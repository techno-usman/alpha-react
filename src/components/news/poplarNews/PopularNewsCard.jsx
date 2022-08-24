import React from 'react'
import Classes from '../../scss/news/PopularNewsCard.module.scss'
import BannerOneImg from '../../../assets/images/banner.webp'
import { Button, Col, Row } from 'react-bootstrap'

const PopularNewsCard = () => {
  return (
    <div className={`${Classes.cardItem} position-relative`}>
      <img src={BannerOneImg} alt='BannerOneImg' className={Classes.cardImg} />
      <div>
        <Row>
          <Col lg={6} className='position-relative'>
            <div className={`p-4 ${Classes.blockInner}`}>
              <h1 className={`${Classes.cardTitle} text-white`}>
                The Best Platform for paly games
              </h1>
              <p className={`${Classes.cardDescription} text-white`}>
                Ease of doing a games safely and reliably. Of course at a low
                price.
              </p>
              <Button className={`${Classes.actionBtn} text-white`}>
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PopularNewsCard
