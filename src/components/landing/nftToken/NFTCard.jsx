import React from 'react';
import Classes from '../../scss/NFTCard.module.scss';
import { Button } from 'react-bootstrap';
const NFTCard = (props) => {
  const {cardTitle,cardImg} = props
  const tagsItem = [
    {
      tagName: 'Unique Avatar Ring',
    },
    {
      tagName: 'Token Value 150',
    },
    {
      tagName: '+1.5% Stacking bonusatar Ring',
    },
    {
      tagName: '+1% Store Discount',
    },
    {
      tagName: '+3% Experience Bonus',
    },
  ];
  return (
    <div className={`${Classes.nftcardWrapper} p-5`}>
      <div>
        <img src={cardImg} alt='GoldImg' />
      </div>
      <div>
        <h1 className={`${Classes.cardTitle} text-white mb-3`}>{cardTitle}</h1>
      </div>
      <div className={`${Classes.tagsWrapper} d-flex align-items-center gap-2 flex-wrap mb-3`}>
        {
          tagsItem.map((tag,index)=> <span key={index} className={`${Classes.tagItem} p-2`}>{tag.tagName}</span> )
        }
      </div>
      <Button className={Classes.actionBtn}>
        Not Avaliable
      </Button>
    </div>
  );
};

export default NFTCard;
