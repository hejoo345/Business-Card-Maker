import React, { memo } from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css'

const CardPreviewList = memo(({cards}) => {
    return(
        <ul className={styles.cards}>
            {
                cards.map(card=>(
                    <CardPreviewItem card={card} key={card.id}/>
                ))
            }

        </ul>
    );}
    )

export default CardPreviewList;