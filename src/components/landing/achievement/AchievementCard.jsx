import React from 'react'
import Classes from '../../scss/AchievementCard.module.scss';
import DiscordCard from '../../../assets/images/components/DISCORD.jpg'
import BountyCard from '../../../assets/images/components/bunty.png'
import { Button } from 'react-bootstrap';

const AchievementCard = () => {
  return (
    <div className={Classes.achievementCardWrapper}>
        <div className='mb-2'>
            <img src={BountyCard} alt='AchivementLargeCard' className={Classes.imgItem} />
        </div>
        <div>
          <h1 className={Classes.title}>Bounty Campaign</h1>
          <p className={Classes.description}>Join Our 15,000$ Bounty campaign while it last. It will last 6 weeks and everyone is welcome to join .</p>
          {/*<Button className={Classes.readmoreAction}>
            Read More
          </Button>*/}
        </div>
    </div>
  )
}

const AchievementCard2 = () => {
  return (
    <div className={Classes.achievementCardWrapper}>
        <div className='mb-2'>
            <img src={DiscordCard} alt='AchivementLargeCard' className={Classes.imgItem} />
        </div>
        <div>
          <h1 className={Classes.title}>Join Our Discord!</h1>
          <p className={Classes.description}>Join Our Discord server , interact with our community and get live updates!</p>
          {/*<Button className={Classes.readmoreAction}>
            Read More
          </Button>*/}
        </div>
    </div>
  )
}

export  {AchievementCard,AchievementCard2}