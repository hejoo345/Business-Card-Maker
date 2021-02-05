import React from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css'

const CardPreviewList = ({cards}) => {
    return(
        <ul className={styles.cards}>
            {
                cards.map(card=>(
                    // console.log(card);
                    <CardPreviewItem card={card} key={card.id}/>
                ))
            }

        </ul>
    )};

export default CardPreviewList;