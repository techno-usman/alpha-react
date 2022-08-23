import React from 'react';
import Classes from '../../scss/Achievement.module.scss';
import { Row, Container, Col } from 'react-bootstrap';
import AchievementCard from './AchievementCard';
import InfoCardsCarousel from '../../common/InfoCardsCarousel';

const Achievement = () => {
    
  return (
    <div className={`${Classes.achievementWrapper} py-5 achievementWrapper`}>
      <Container>
        <InfoCardsCarousel />
        <Row className='mt-5'>
          <Col lg={6}>
            <AchievementCard />
          </Col>
          <Col lg={6}>
            <AchievementCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Achievement;
