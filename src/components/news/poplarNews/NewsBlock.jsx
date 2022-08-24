import React from 'react'
import Classes from '../../scss/news/NewsBlock.module.scss'
import NewsLargeBlock from './NewsLargeBlock'
import { Button, Col, Row } from 'react-bootstrap'
import HorizontolNewsCard from './HorizontolNewsCard'
import PinkEllipsis from '../../common/PinkEllipsis'
import VerticalNewsCard from './VerticalNewsCard'

const NewsBlock = () => {
  return (
    <div className={Classes.newsWrapper}>
      <div className='d-flex justify-content-between align-items-center gap-2'>
        <h1 className={`${Classes.blockTitle} text-white`}>News</h1>
        <div className={`${Classes.filterBtnWrapper} d-flex flex-wrap gap-2`}>
          <Button className={`${Classes.filterBtn} ${Classes.activeBtn}`}>
            All Categories
          </Button>
          <Button className={Classes.filterBtn}>Art</Button>
          <Button className={Classes.filterBtn}>Celebrities</Button>
          <Button className={Classes.filterBtn}>Gaming</Button>
        </div>
      </div>
      <NewsLargeBlock />
      <div className={`position-relative`}>
        <PinkEllipsis className={Classes.pinkEllipsis} />
        <HorizontolNewsCard />
        <HorizontolNewsCard />
        <HorizontolNewsCard />
      </div>
      <Row className='mt-5 position-relative'>
        <PinkEllipsis className={Classes.pinkEllipsis} />
        <Col lg={6}>
          <VerticalNewsCard />
        </Col>
        <Col lg={6}>
          <VerticalNewsCard />
        </Col>
        <Col lg={6}>
          <VerticalNewsCard />
        </Col>
        <Col lg={6}>
          <VerticalNewsCard />
        </Col>
      </Row>
      <div className='d-flex justify-content-center'>
        <Button className={Classes.viewAllBtn}>View All</Button>
      </div>
    </div>
  )
}

export default NewsBlock
