import React from 'react';
import Classes from '../../scss/Banner.module.scss';
import BannerOneImg from '../../../assets/images/banner.webp';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { ReactComponent as PlayIcon } from '../../../assets/svg/play.svg';
import Slider from 'react-slick';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className='banner-carousel'>
      <Slider {...settings}>
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${BannerOneImg})` }}
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
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${BannerOneImg})` }}
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
        <div>
          <div
            className={`${Classes.bannerWrapper} pt-5 mt-5 d-flex justify-content-center align-items-center`}
            style={{ background: `url(${BannerOneImg})` }}
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
