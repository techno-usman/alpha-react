import React from 'react'
import Header from '../../layout/Header/Header'
import BreadCrumb from '../../components/common/BreadCrumb'
import BlogDetailsCard from '../../components/blog/BlogDetailsCard'
import BlogSidebar from '../../components/blog/BlogSidebar'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'
import Classes from './Blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Comments from '../../components/blog/Comments'

const BlogDetails = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '200px' }}>
        <BreadCrumb />
        <Container>
          <Row>
            <Col lg={8}>
              <h1 className={`${Classes.blockTitle} mb-4`}>
                Secrete code, New Adventures towards Snowy Mount
              </h1>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <BlogDetailsCard />
              <Comments />
            </Col>
            <Col lg={4}>
              <BlogSidebar />
            </Col>
          </Row>
        </Container>
      </main>
      <Subscribe />
      <Footer />
    </>
  )
}

export default BlogDetails
