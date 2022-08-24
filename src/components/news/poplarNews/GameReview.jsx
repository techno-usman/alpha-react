import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Classes from '../../scss/news/GameReview.module.scss'
import GameReviewCard from './GameReviewCard'
import PinkEllipsis from '../../common/PinkEllipsis'

const GameReview = () => {
  return (
    <div className={`${Classes.gameReviewWrapper} my-5`}>
      <h1 className={`${Classes.blockTitle} mb-5`}>
        <span className='text-white'>Game</span>{' '}
        <span style={{ color: '#FC00FF' }}>Review</span>
      </h1>
      <Row className='position-relative'>
        <PinkEllipsis className={Classes.pinkEllipsis} />
        <Col lg={4}>
          <GameReviewCard />
        </Col>
        <Col lg={4}>
          <GameReviewCard />
        </Col>
        <Col lg={4}>
          <GameReviewCard />
        </Col>
      </Row>
    </div>
  )
}

export default GameReview
