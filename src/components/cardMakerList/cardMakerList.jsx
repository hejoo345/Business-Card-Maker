import React, { memo } from 'react';
import CardMakerItem from '../cardMakerItem/cardMakerItem';
import CardMakerAdd from './cardMakerAdd';
import styles from './cardMakerList.module.css';

const CardMakerList = memo(({FileInput, cards,onCardDelete,onCardUpdate, onFileChange, onCardAdd}) => {
    return(
        <section className={styles.container}>
            <h1 className={styles.cardMakerTitle}>Card Maker</h1>
            <ul className={styles.cards}>
                {
                Object.keys(cards).map(key=>(
                    <CardMakerItem
                    key={key} 
                    FileInput={FileInput}
                    card={cards[key]}
                    onCardDelete={onCardDelete}
                    onCardUpdate={onCardUpdate}/>
                ))
                }
            </ul>
            <CardMakerAdd 
            FileInput={FileInput}
            onCardAdd={onCardAdd}/>
        </section>
    );
})

export default CardMakerList;