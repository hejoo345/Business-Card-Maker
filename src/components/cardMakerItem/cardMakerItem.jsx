import React from 'react';
import styles from './cardMakerItem.module.css';

const CardMakerItem = ({card}) => {
    return(
        <li className={styles.cardMakerItem}>
        <div className={styles.line1}>
            <input className={styles.name} type="text" placeholder={card.name}></input>
            <input className={styles.company} type="text" placeholder={card.company}></input>
            <select className={styles.theme} value={card.theme}>
                <option value="Light">Light</option>
                <option value="Dark">Black</option>
                <option value="Beige">Beige</option>
            </select>
        </div>
        <div className={styles.line2}>
            <input className={styles.title} type="text" placeholder={card.title}></input>
            <input className={styles.email} type="text" placeholder={card.email}></input>
        </div>
        <div className={styles.line3}>
            <input className={styles.message} type="text" placeholder={card.message}></input>
        </div>
        <div className={styles.line4}>
            <button className={styles.fileBtn} placeholder="No File">{card.fileName}</button>
            <button className={styles.deleteBtn}>Delete</button>
        </div>
        
    </li>  
    );}

export default CardMakerItem;