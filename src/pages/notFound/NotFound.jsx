import React from 'react'
import Header from '../../layout/Header/Header'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: '200px' }}>
        <Container>
          <Row>
            <Col>
              <h1 className='text-white text-center'>Page Not Found</h1>
              <div className='d-flex gap-3 flex-wrap'>
                <Link to='/'>
                  <Button>1 Home</Button>
                </Link>
                <Link to='/home/news'>
                  <Button>2 News</Button>
                </Link>
                <Link to='/home/blog'>
                  <Button>3 Blog</Button>
                </Link>
                <Link to='/home/blog/details'>
                  <Button>4 Blog Details</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}

export default NotFound
