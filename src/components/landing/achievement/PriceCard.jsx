import React from 'react'
import Classes from '../../scss/PriceCard.module.scss';
import { Button } from 'react-bootstrap';
import CardImg from '../../../assets/images/components/achivementCard.webp'
const PriceCard = () => {
  return (
    <div className={`${Classes.cardBlockWrapper} py-2 px-3`}>
        <div>
            <img src={CardImg} alt='CardImg' className={Classes.cardImgItem} />
        </div>
        <div className='d-flex justify-content-between align-items-center mt-3'>
            <span className={Classes.cardsubTitle}>GAME BASE</span>
            <Button className={Classes.discountBtn}>-50%</Button>
        </div>
        <h1 className={Classes.title}>Hazel Sky</h1>
        <div className='d-flex justify-content-between align-items-center my-3'>
            <span className={Classes.beforePrice}>$95</span>
            <span className={`${Classes.price} text-white`}>$55</span>
        </div>
    </div>
  )
}

export default PriceCard