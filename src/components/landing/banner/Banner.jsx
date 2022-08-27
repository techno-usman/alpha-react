import React from 'react';
import Classes from '../../scss/Banner.module.scss';
import Banner1Img from '../../../assets/images/discordposts.jpg';
import Banner2Img from '../../../assets/images/espostsSlide.jpg';
import Banner3Img from '../../../assets/images/Presale.png';
import Banner4Img from '../../../assets/images/SubscribeSlide.jpg';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play.svg';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='banner-carousel'>
      <Slider {...settings}>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner1Img})` }}
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <div className={Classes.bannerInner} style={{marginBottom: '150px'}}>
                    <h1 className={`${Classes.title} text-center`}>
                      Join AlphaPlay
                    </h1>
                    <p className={`${Classes.description} text-center`} style={{marginTop: '-25px'}}>
                    Join ever-growing ecosystem.Earn as you play.{' '}
                    </p>
                    <div className='d-flex align-items-center justify-content-center gap-3 flex-wrap mt-4'>
                      <div className='d-flex align-items-center gap-3' style={{marginTop: '-25px'}}>
                        
                          <PlayIcon />
                          <span className='text-white'>Watch Video</span>
                        
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner3Img})` }}
          >
            <Container style={{ "margin-bottom": '-380px' }} >
              <Row>
                <Col lg={12}>
                  <div className={Classes.bannerInner}>
                    <a href="https://presale.alphaplay.games" style={{textDecoration: 'none'}}><h1 className={`${Classes.presaletitle} text-center`} >
                      Join AlphaPlay Presale
                    </h1></a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${Banner2Img})` }}
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <div className={Classes.bannerInner}>
                    <h1 className={`${Classes.title} text-center`}>
                      Let's Join Alpha Play
                    </h1>
                    <p className={`${Classes.description} text-center`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse vitae ligula placerat, eleifend ex non,
                      vehicula libero. Suspendisse eget tellus lectus.{' '}
                    </p>
                    <div className='d-flex align-items-center justify-content-center gap-3 flex-wrap mt-4'>
                      <Button className={Classes.startedBtn}>
                        Get Started
                      </Button>
                      <div className='d-flex align-items-center gap-3'>
                        <PlayIcon />
                        <span className='text-white'>Watch Video</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
