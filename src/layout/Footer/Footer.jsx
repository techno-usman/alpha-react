import React from 'react'
import Classes from '../scss/Footer.module.scss'
import { Row, Container, Col } from 'react-bootstrap'
import LogoImg from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as Twitter } from '../../assets/svg/twitter.svg'
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/svg/youtube.svg'
import { ReactComponent as Discord } from '../../assets/svg/discord.svg'

const Footer = () => {
  const navLinks = [
    {
      pageName: 'Ways to earn',
      to: '/waysToEarn',
    },
    {
      pageName: 'Store',
      to: '/store',
    },
    {
      pageName: 'Careers',
      to: '/careers',
    },
    {
      pageName: 'About',
      to: '/about',
    },
  ]
  const socialLinks = [
    {
      socialIcon: <FacebookIcon />,
      to: '/FacebookIcon',
    },
    {
      socialIcon: <Twitter />,
      to: '/Twitter',
    },
    {
      socialIcon: <Linkedin />,
      to: '/Linkedin',
    },
    {
      socialIcon: <Instagram />,
      to: '/Instagram',
    },
    {
      socialIcon: <Youtube />,
      to: '/Youtube',
    },
    {
      socialIcon: <Discord />,
      to: '/Discord',
    },
  ]
  return (
    <footer className={`${Classes.footer} py-5`}>
      <Container>
        <Row className='align-items-center'>
          <Col lg={2}>
            <Link to='/'>
              <img src={LogoImg} alt='logo' className={Classes.logoImg} />
            </Link>
          </Col>
          <Col lg={10}>
            <Row className='align-items-center'>
              <Col lg={6}>
                <ul className='list-unstyled d-flex flex-wrap align-items-center justify-content-center gap-2 gap-lg-4 mb-0 py-2'>
                  {navLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.to}
                        className={`${Classes.navLinks} text-white text-decoration-none`}
                      >
                        {item.pageName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={6}>
                <ul className='list-unstyled d-flex flex-wrap align-items-center gap-2 gap-lg-4 mb-0 py-2'>
                  {socialLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.to}
                        className={`${Classes.navLinks} text-white text-decoration-none`}
                      >
                        {item.socialIcon}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
