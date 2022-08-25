import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Classes from '../scss/blog/Categories.module.scss'

const Categories = () => {
  return (
    <div className={`${Classes.categoriesWrapper} my-5`}>
      <h1 className={`${Classes.blockTitle} my-3`}>CATEGORIEOS</h1>
      <Row>
        <Col lg={6}>
          <div class={`form-check mb-3 ${Classes.checkboxItem}`}>
            <input
              type='checkbox'
              class={`form-check-input ${Classes.checkboxInput}`}
              id='exampleCheck1'
            />
            <label
              class={`form-check-label text-white text-white ${Classes.label}`}
              for='exampleCheck1'
            >
              ANIMATIONS
            </label>
          </div>
        </Col>
        <Col lg={6}>
          <div class={`form-check mb-3 ${Classes.checkboxItem}`}>
            <input
              type='checkbox'
              class={`form-check-input ${Classes.checkboxInput}`}
              id='exampleCheck1'
            />
            <label
              class={`form-check-label text-white text-white ${Classes.label}`}
              for='exampleCheck1'
            >
              GAMES
            </label>
          </div>
        </Col>
        <Col lg={6}>
          <div class={`form-check mb-3 ${Classes.checkboxItem}`}>
            <input
              type='checkbox'
              class={`form-check-input ${Classes.checkboxInput}`}
              id='exampleCheck1'
            />
            <label
              class={`form-check-label text-white text-white ${Classes.label}`}
              for='exampleCheck1'
            >
              TRENDING
            </label>
          </div>
        </Col>
        <Col lg={6}>
          <div class={`form-check mb-3 ${Classes.checkboxItem}`}>
            <input
              type='checkbox'
              class={`form-check-input ${Classes.checkboxInput}`}
              id='exampleCheck1'
            />
            <label
              class={`form-check-label text-white text-white ${Classes.label}`}
              for='exampleCheck1'
            >
              POPULAR
            </label>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Categories
