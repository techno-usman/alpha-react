import React from 'react';
import PriceCard from '../landing/achievement/PriceCard';
import Classes from '../scss/Achievement.module.scss';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { ReactComponent as CarrotRight } from '../../assets/svg/carrotRight.svg';
import { ReactComponent as CarrotLeft } from '../../assets/svg/carrotLeft.svg';

const InfoCardsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    nextArrow: (
      <div>
        <CarrotRight />
      </div>
    ),
    prevArrow: (
      <div>
        <CarrotLeft />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row>
      <Col>
        <h1 className={`${Classes.blockTitle} mb-5`}>
          {' '}
          <span style={{ color: '#EE05FF' }}>Game With</span>{' '}
          <span className='text-white'>Achievements</span>
        </h1>
        <div>
          <Slider {...settings}>
            <div>
              <PriceCard />
            </div>
            <div>
              <PriceCard />
            </div>
            <div>
              <PriceCard />
            </div>
            <div>
              <PriceCard />
            </div>
            <div>
              <PriceCard />
            </div>
            <div>
              <PriceCard />
            </div>
          </Slider>
        </div>
      </Col>
    </Row>
  );
};

export default InfoCardsCarousel;
