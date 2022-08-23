import React from 'react'
import Classes from '../../scss/Partners.module.scss'
import { Row, Container, Col } from 'react-bootstrap';
import BoomerangImg from '../../../assets/images/boomerang.png'
import BlimpImg from '../../../assets/images/blimp.png'
import OpendoorImg from '../../../assets/images/opendoor.png'
import Qrcoimg from '../../../assets/images/qrco.png'
import Droplet from '../../../assets/images/droplet.png'

const Partners = () => {
  return (
    <div className={`${Classes.partnersWrapper} py-5`}>
        <Container>
            <Row className='mb-5'>
                <Col lg={12}>
                    <div className={Classes.innerWrapper}>
                        <h1 className={Classes.title}>Our partners</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={BoomerangImg} alt='BoomerangImg' />
                </Col>
                <Col>
                    <img src={BlimpImg} alt='BlimpImg' />
                </Col>
                <Col>
                    <img src={Qrcoimg} alt='Qrcoimg' />
                </Col>
                <Col>
                    <img src={OpendoorImg} alt='OpendoorImg' />
                </Col>
                <Col>
                    <img src={Droplet} alt='BoomerangImg' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Partners