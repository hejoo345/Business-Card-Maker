import React from 'react';
import CardMakerItem from '../cardMakerItem/cardMakerItem';
import styles from './cardMakerList.module.css';

const CardMakerList = ({cards}) => {
    return(
        <ul className={styles.cards}>
            {
            cards.map(card=>(
                <CardMakerItem key={card.id} card={card}/>
            ))
            }
        </ul>
    );
};

export default CardMakerList;