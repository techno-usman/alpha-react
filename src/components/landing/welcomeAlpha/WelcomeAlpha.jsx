import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Classes from '../../scss/WelcomeAlpha.module.scss';
import VideologoImg from '../../../assets/images/videoLogo.png'
import { ReactComponent as PlayIcon } from '../../../assets/svg/playiconColor.svg';
const WelcomeAlpha = () => {
  return (
    <div className={`${Classes.welcomeAlphaWrapper} py-5`}>
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className={`text-center mb-2 ${Classes.title}`}>
              <span className='text-white'>Welcome to</span>{' '}
              <span style={{ color: '#EE05FF' }}>Alpha Play</span>
            </h1>
            <p className={`${Classes.description} text-center`}>AlphaPlay is your long searched destination for crypto gaming</p>
            <div className={`${Classes.videoSectionBlock} p-5 d-flex justify-content-center align-items-center`} >
                <div className={`${Classes.imgWrapper} d-flex justify-content-center align-items-center`} style={{ background: `url(${VideologoImg})` }}>
                     <PlayIcon className='position-relative'  />
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomeAlpha;
