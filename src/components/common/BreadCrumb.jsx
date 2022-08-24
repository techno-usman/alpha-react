import React from 'react'
import Classes from '../scss/common/BreadCrumb.module.scss'
import { Row, Container, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <Container>
      <Row>
        <Col>
          <div className={`${Classes.pathBreadcrumb} mb-2`}>{pathName}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default BreadCrumb
