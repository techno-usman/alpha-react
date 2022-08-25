import React from 'react'
import Header from '../../layout/Header/Header'
import BreadCrumb from '../../components/common/BreadCrumb'
import PopularBlog from '../../components/blog/PopularBlog'
import BlogCard from '../../components/blog/BlogCard'
import BlogSidebar from '../../components/blog/BlogSidebar'

import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../layout/Footer/Footer'
import Classes from './Blog.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

const Blog = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '200px' }}>
        <BreadCrumb />
        <PopularBlog />
        <Container>
          <Row>
            <Col>
              <h1 className={`${Classes.blockTitle} mb-4`}>All Blogs</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <BlogCard />
              <BlogCard />
              <BlogCard />
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

export default Blog
