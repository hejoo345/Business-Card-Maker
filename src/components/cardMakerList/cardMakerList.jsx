import React, { memo } from 'react';
import CardMakerItem from '../cardMakerItem/cardMakerItem';
import styles from './cardMakerList.module.css';

const CardMakerList = memo(({cards,onCardDelete, editCardHandler, onImgUpload}) => {
    return(
        <ul className={styles.cards}>
            {
            cards.map(card=>(
                <CardMakerItem key={card.id} card={card}
                 onCardDelete={onCardDelete} 
                 editCardHandler={editCardHandler}
                 onImgUpload={onImgUpload}/>
            ))
            }
        </ul>
    );
})

export default CardMakerList;