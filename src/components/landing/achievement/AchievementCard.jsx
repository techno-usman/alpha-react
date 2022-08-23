import React from 'react'
import Classes from '../../scss/AchievementCard.module.scss';
import AchivementLargeCard from '../../../assets/images/components/achivementLargeCard.webp'
import { Button } from 'react-bootstrap';

const AchievementCard = () => {
  return (
    <div className={Classes.achievementCardWrapper}>
        <div className='mb-2'>
            <img src={AchivementLargeCard} alt='AchivementLargeCard' className={Classes.imgItem} />
        </div>
        <div>
          <h1 className={Classes.title}>GHOSTBUSTER</h1>
          <p className={Classes.description}>Ghostbusters: Spirits Unleashed is released October 18, available for pre-purchase today!</p>
          <Button className={Classes.readmoreAction}>
            Read More
          </Button>
        </div>
    </div>
  )
}

export default AchievementCard