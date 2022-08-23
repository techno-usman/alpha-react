import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import Classes from '../../scss/twoBlock.module.scss';

const ESports = () => {
  return (
    <div className={`${Classes.blockWrapper} py-5`} style={{backgroundColor: '#0F0336'}}>
      <Container className='my-5 py-5'>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='py-3'>
                <div className={Classes.pinkItemEllipsis}></div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <h1 className={`mb-2 ${Classes.title}`}>eSports</h1>
            </div>
            <p className={`mb-3 ${Classes.description}`}>
              Compete with world best players in world wide tournaments to win
              cash,crypto and other prizes. Construct your own unique matches
              with custom rules and invite people from your gaming group to
              participate and compete.
            </p>
            <Button className={Classes.actionBtn}>Join Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ESports;
