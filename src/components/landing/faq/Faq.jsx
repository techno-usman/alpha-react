import React from 'react'
import Classes from '../../scss/Faq.module.scss'
import { Row, Container, Col } from 'react-bootstrap'
import FqaImg from '../../../assets/images/faq.webp'
import AccordianItem from './AccordianItem'

const Faq = () => {
  const accordianTitle = [
    {
      title: 'Which platforms does the Alpha Play Store support?',
    },
    {
      title: 'What are the future plans for the Alpha Play Games Store?',
    },
    {
      title: 'Why does the Alpha Play Games Store make exclusivity deals?',
    },
    {
      title: 'What is the Support-A-Creator program? ',
    },
    {
      title: 'I claimed a free game but don’t see it on my account now, why?',
    },
    {
      title: 'Can I try a game before I buy it?',
    },
    {
      title: 'How do refunds work on the Alpha Play Games Store?',
    },
  ]
  return (
    <div className={`py-5 ${Classes.faqWrapper}`}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <h1 className={`text-center mb-5 ${Classes.blockTitle}`}>
              <span className='text-white'>Frequently Asked</span>{' '}
              <span style={{ color: '#FC00FF' }}>Questions</span>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <img src={FqaImg} alt='FqaImg' className='w-100' />
          </Col>
          <Col lg={7}>
            {accordianTitle?.map((item, index) => (
              <AccordianItem key={index} title={item.title} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Faq
