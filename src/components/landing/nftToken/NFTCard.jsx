import React from 'react';
import Classes from '../../scss/NFTCard.module.scss';
import { Button } from 'react-bootstrap';
const NFTCard = (props) => {

  const { cardTitle, cardImg } = props

  const bronzeItems =
    [{
      tagName: 'Unique Avatar Ring',
    },
    {
      tagName: '+1.5% Stacking bonus',
    },
    {
      tagName: '+3% Experience Bonus',
    },
    {
      tagName: '+1% Store Discount',
    },
    {
      tagName: 'Token Value 150',
    }];

  const goldItems =
    [{
      tagName: 'Unique Avatar Ring',
    },
    {
      tagName: '+5% Stacking bonus',
    },
    {
      tagName: '+10% Experience Bonus',
    },
    {
      tagName: '+0.1% Validator Bonus',
    },
    {
      tagName: '+5% Store Discount',
    },
    {
      tagName: 'Token Value 450',
    }];

  const silverItems =
    [{
      tagName: 'Unique Avatar Ring',
    },
    {
      tagName: '+3% Stacking bonus',
    },
    {
      tagName: '+7% Experience Bonus',
    },
    {
      tagName: '+3% Store Discount',
    },
    {
      tagName: 'Token Value 300',
    }];

  const cardClass = cardTitle.toLowerCase();

  let listItems = [];

  if (cardClass === "gold") {
    listItems = goldItems.map((tag, index) =>
      <li key={index}>{tag.tagName}</li>
    );
  }

  if (cardClass === "bronze") {
    listItems = bronzeItems.map((tag, index) =>
      <li key={index}>{tag.tagName}</li>
    );
  }

  if (cardClass === "silver") {
    listItems = silverItems.map((tag, index) =>
      <li key={index}>{tag.tagName}</li>
    );
  }

  return (

    <div className={`${Classes.nftcardWrapper + ' ' + Classes[cardClass]}`}>
      <div className="text-center">
        <img src={cardImg} alt='GoldImg' />
      </div>
      <div className="text-center mb-4">
        <h1 className={`${Classes.cardTitle} text-white mb-2`}>{cardTitle}</h1>
        <div className={Classes.CardDivider}>&nbsp;</div>
      </div>
      <div className={`${Classes.tagsWrapper} mb-3 text-white`}>
        <ul className={Classes.tagItemsList}>{listItems}</ul>
      </div>
      <div className="text-center">
        <Button className={Classes.outlineBtn + ' ' + Classes.shrinkOnHover}>
          Not Avaliable
        </Button>
      </div>
    </div>
  );
};

export default NFTCard;
