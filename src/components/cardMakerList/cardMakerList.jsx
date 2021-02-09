import React, { memo } from 'react';
import CardMakerItem from '../cardMakerItem/cardMakerItem';
import styles from './cardMakerList.module.css';

const CardMakerList = memo(({FileInput, cards,onCardDelete, editCardHandler, onFileChange}) => {
    return(
        <ul className={styles.cards}>
            {
            cards.map(card=>(
                <CardMakerItem
                key={card.id} 
                FileInput={FileInput}
                card={card}
                onCardDelete={onCardDelete} 
                editCardHandler={editCardHandler}
                onFileChange={onFileChange}/>
            ))
            }
        </ul>
    );
})

export default CardMakerList;