import React from 'react'
import Classes from '../scss/blog/PopularBlog.module.scss'
import { Row, Container, Col, Button } from 'react-bootstrap'
import PopularBlogCard from './PopularBlogCard'

const PopularBlog = () => {
  return (
    <div className={`mt-5 ${Classes.popularBlogWrapper}`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h3 className={`${Classes.blockTitle} text-white mb-3`}>
              Popular Blog
            </h3>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col lg={7}>
            <PopularBlogCard />
          </Col>
          <Col lg={5}>
            <div className={Classes.metaInfo}>
              <h3 className={Classes.title}>Loreum</h3>
              <p className={Classes.description}>
                agittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
                adipiscing. Pellentesque sed turpis nunc gravida pharetra,{' '}
              </p>
              <Button className={Classes.readmoreButton}>Read More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PopularBlog
