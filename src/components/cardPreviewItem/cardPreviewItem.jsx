import React from 'react';
import styles from './cardPreviewItem.module.css';

const DEFAULT_IMG = '/images/default_logo.png';

const getStyles = (theme) =>{
    switch(theme){
        case 'Light':
            return styles.light;
        case 'Dark':
            return styles.dark;
        case 'Beige':
            return styles.beige;
    }
}

const CardPreviewItem = ({card}) => {
    const url = card.fileURL || DEFAULT_IMG;
    return(
        <li className={`${styles.cardPreviewItem} ${getStyles(card.theme)}`}>
            <img className={styles.img} src={url}
                alt={url}></img>    
            <ul className={styles.info}>
                <h3 className={styles.name}>{card.name}</h3>
                <li className={styles.company}>{card.company}</li>
                <li className={styles.title}>{card.title}</li>
                <li className={styles.message}>{card.message}</li>
                <li className={styles.email}>{card.email}</li>
            </ul>
        </li>
    )};

export default CardPreviewItem;