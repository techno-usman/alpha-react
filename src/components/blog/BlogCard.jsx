import React from 'react'
import Classes from '../scss/blog/BlogCard.module.scss'
import BannerOneImg from '../../assets/images/banner.webp'
import { ReactComponent as CommentIcon } from '../../assets/svg/comment.svg'
import { Col, Row, Button } from 'react-bootstrap'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className={`${Classes.blogCardWrapper} p-4 mb-5`}>
      <div className='mb-3'>
        <img
          src={BannerOneImg}
          alt='BannerOneImg'
          className={Classes.bannerImg}
        />
      </div>
      <div className='d-flex justify-content-between'>
        <h3 className={`mb-0 text-white ${Classes.cardTitle}`}>
          Secrete code, New Adventures towards Snowy Mount
        </h3>
        <div
          className={`d-flex align-items-center gap-2 ${Classes.commentIcon}`}
        >
          <CommentIcon />
          <span className={`${Classes.date}`}>7 comments</span>
        </div>
      </div>
      <Row>
        <Col lg={8}>
          <p className={`${Classes.description}`}>
            TJust then her head struck against the roof of the hall: in fact she
            was now more than nine feet high, and she at once took up the little
            golden key and hurried off to the garden door...
          </p>
        </Col>
      </Row>
      <div className='d-flex flex-wrap gap-4'>
        <Button className={Classes.orangBtn}>Irfan Saeed</Button>
        <Button className={Classes.blueBtn}>10 December 2018</Button>
      </div>
      <div className='d-flex justify-content-between flex-wrap align-items-center'>
        <div className='d-flex gap-3 align-items-center mt-3'>
          <span className='text-white'>Share:</span>
          <div className='d-flex gap-2'>
            <FacebookIcon />
            <Linkedin />
            <Twitter />
            <Instagram />
            <Youtube />
          </div>
        </div>
        <span>
          <Link to='/home/blog/details'>
            <Button className={Classes.readmoreBtn}>Read More</Button>
          </Link>
        </span>
      </div>
    </div>
  )
}

export default BlogCard
