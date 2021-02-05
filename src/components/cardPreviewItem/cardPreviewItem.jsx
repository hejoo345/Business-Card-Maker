import React from 'react';
import styles from './cardPreviewItem.module.css';

const CardPreviewItem = ({card}) => {
    return(
        <li className={styles.cardPreviewItem}>
            <div className={styles.imgBox}>
            <img className={styles.img} src="/images/IMG_6629.jpg" 
                alt="프사"></img>
            </div>
            <ul className={styles.info}>
                <li>{card.name}</li>
                <li>{card.company}</li>
                <li>{card.title}</li>
                <li>{card.email}</li>
                <li>{card.message}</li>
            </ul>
        </li>
    )};

export default CardPreviewItem;