import React, { memo } from 'react';
import CardPreviewItem from '../cardPreviewItem/cardPreviewItem';
import styles from './cardPreviewList.module.css'

const CardPreviewList = memo(({cards}) => {
    return(
        <section className={styles.container}>
            <h1 className={styles.cardPreviewTitle}>Card Preview</h1>
            <ul className={styles.cards}>
                {
                    Object.keys(cards).map(key=>(
                        <CardPreviewItem card={cards[key]} key={key}/>
                    ))
                }
            </ul>
        </section>
    );}
    )

export default CardPreviewList;