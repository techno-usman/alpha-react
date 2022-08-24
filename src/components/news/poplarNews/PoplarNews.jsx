import React from 'react'
import Classes from '../../scss/news/PoplarNews.module.scss'
import { Row, Container, Col } from 'react-bootstrap'
import PopularNewsCard from './PopularNewsCard'
import PinkEllipsis from '../../common/PinkEllipsis'
import BlueEllipsis from '../../common/BlueEllipsis'

const PoplarNews = () => {
  return (
    <div className={`${Classes.poplarNewsWrapper} mb-5`}>
      <Container>
        <Row>
          <Col>
            <h1 className={`${Classes.blockTitle} text-white mb-4`}>
              Popular News
            </h1>
          </Col>
        </Row>
        <Row className='position-relative'>
          <Col lg={6}>
            <PopularNewsCard />
            <PinkEllipsis className={Classes.pinkEllipsis} />
          </Col>
          <Col lg={6}>
            <BlueEllipsis className={Classes.blueEllipsis} />
            <PopularNewsCard />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PoplarNews
