import React from 'react';
import Classes from '../../scss/NewGameCard.module.scss';
import AchivementLargeCard from '../../../assets/images/components/achivementLargeCard.webp';

const NewGameCard = () => {
  return (
    <div className={`${Classes.newGameCardWrapper} mb-5`}>
      <div className='mb-3'>
        <img
          src={AchivementLargeCard}
          alt='AchivementLargeCard'
          className={Classes.imgItem}
        />
      </div>
      <div>
        <div className='d-flex justify-content-between align-items-center flex-wrap'>
          <h1 className={Classes.cardTitle}>THE ELDER SCROLL</h1>
          <span className={Classes.metaInfo}>PC/XBOX/PS4</span>
        </div>
        <p className={Classes.description}>
            The Elder Scroll is the most popular are ames that your can Latest Mega 2019 games offer you ioous league and also alow you to make youe and smile 
        </p>
      </div>
    </div>
  );
};

export default NewGameCard;
