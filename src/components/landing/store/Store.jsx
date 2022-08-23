import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Classes from '../../scss/twoBlock.module.scss';
import storeImg from '../../../assets/images/components/store.webp';

const Store = () => {
  return (
    <div className={`${Classes.blockWrapper} py-5`} style={{backgroundColor: '#1B0D3D'}}> 
      <Container className='my-5 py-5'>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div>
              <h1 className={`mb-2 ${Classes.title}`}>Store</h1>
            </div>
            <p className={`mb-3 ${Classes.description}`}>
              Store AlphaPlay will offer real-world items such as gaming
              laptops, monitors, virtual reality headsets, keyboards, and other
              gaming accessories. Additionally, digital items such as NFTs, game
              vouchers, and digital game copies are available.
            </p>
            <Button className={Classes.actionBtn}>Join Now</Button>
          </Col>
          <Col lg={6}>
            <div className='py-3'>
             <img src={storeImg} alt='storeImg' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Store;
