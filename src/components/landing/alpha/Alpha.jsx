import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Classes from '../../scss/twoBlock.module.scss';
import alphaImg from '../../../assets/images/components/alpha.webp';

const Alpha = () => {
  return (
    <div
      className={`${Classes.blockWrapper} py-5`}
      style={{ backgroundColor: '#1B0D3D' }}
    >
      <Container className='my-5 py-5'>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='py-3'>
              <img src={alphaImg} alt='alphaImg' />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h1 className={`mb-2 ${Classes.title}`}>Alpha Season</h1>
            </div>
            <p className={`mb-3 ${Classes.description}`}>
              Enter the competitions in each season to have a chance to win
              unique and exotic prizes, such as NFTs, badges, Crypto and other
              items that are specific to that season.
            </p>
            <Button className={Classes.actionBtn}>Join Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Alpha;
