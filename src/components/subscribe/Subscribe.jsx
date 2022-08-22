import React from 'react';
import Classes from '../scss/subscribe.module.scss';
import { Row, Container, Col } from 'react-bootstrap';

const Subscribe = () => {
  return (
    <div className={`${Classes.subscribeBlockWrapper} py-5`}>
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className={`text-white ${Classes.title}`}>
              Subscribe to Our Newsletter
            </h1>
            <p className={`text-white ${Classes.description}`}>
              Get the latest news, deals, and giveaways delivered straight to
              you inbox!
            </p>
          </Col>
          <Col lg={6}>
            <div className={`${Classes.inputWrapper} d-flex flex-wrap`}>
              <input placeholder='Enter your email' type='email' className={`btn text-white bg-white ${Classes.inputItem}`}  />
              <button className={`btn text-white ${Classes.actionBtn}`}>Suscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
