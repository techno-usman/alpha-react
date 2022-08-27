import React from 'react';
import Classes from '../../scss/Achievement.module.scss';
import { Row, Container, Col } from 'react-bootstrap';
import {AchievementCard,AchievementCard2} from './AchievementCard';
import InfoCardsCarousel from '../../common/InfoCardsCarousel';

const Achievement = () => {
    
  return (
    <div className={`${Classes.achievementWrapper} py-5 achievementWrapper`}>
      <Container>
      <h1 className={`${Classes.blockTitle} mb-5`}>
          {' '}
          <span style={{ color: '#EE05FF' }}>AlphaPlay</span>{' '}
          <span className='text-white'>News</span>
        </h1>
        {/*<InfoCardsCarousel />*/}
        <Row className='mt-5'>
          <Col lg={6}>
            <a href="https://bounty.alphaplay.games" style={{textDecoration: 'none'}}><AchievementCard /></a>
          </Col>
          <Col lg={6}>
          <a href="https://discord.gg/NSVMBUbncd" style={{textDecoration: 'none'}}><AchievementCard2 /></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Achievement;
