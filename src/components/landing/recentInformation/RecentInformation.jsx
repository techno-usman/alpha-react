import React from 'react';
import Classes from '../../scss/RecentInformation.module.scss';
import { Row, Container, Col } from 'react-bootstrap';
import InfoCardsCarousel from '../../common/InfoCardsCarousel';

const RecentInformation = () => {
  return (
    <div
      className={`${Classes.recentInformationWrapper} py-5 achievementWrapper`}
    >
      <Container> 
        <Row className='mb-5'>
          <Col>
            <InfoCardsCarousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <InfoCardsCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecentInformation;
