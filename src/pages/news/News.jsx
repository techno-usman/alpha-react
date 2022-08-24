import React from 'react'
import Header from '../../layout/Header/Header'
import BreadCrumb from '../../components/common/BreadCrumb'
import PoplarNews from '../../components/news/poplarNews/PoplarNews'
import NewsBlock from '../../components/news/poplarNews/NewsBlock'
import GameReview from '../../components/news/poplarNews/GameReview'

import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'
import Sidebar from '../../components/news/Sidebar'

import { Row, Container, Col } from 'react-bootstrap'

const News = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '200px' }}>
        <BreadCrumb />
        <PoplarNews />
        <Container>
          <Row>
            <Col lg={8}>
              <NewsBlock />
            </Col>
            <Col lg={4}>
              <Sidebar />
            </Col>
          </Row>
          <Row>
            <Col>
              <GameReview />
            </Col>
          </Row>
        </Container>
      </main>
      <Subscribe />
      <Footer />
    </>
  )
}

export default News
