import React from 'react';
import styles from './cardMakerItem.module.css';

const CardMakerItem = ({card}) => {

    const fileName = card.fileName || 'No File';
    return(
        <form className={styles.cardMakerItem}>
        <div className={styles.line1}>
            <input className={styles.name} type="text" name="name" defaultValue={card.name}></input>
            <input className={styles.company} type="text" name="company" defaultValue={card.company}></input>
            <select className={styles.theme} name="theme" defaultValue={card.theme}>
                <option value="Light">Light</option>
                <option value="Dark">Black</option>
                <option value="Beige">Beige</option>
            </select>
        </div>
        <div className={styles.line2}>
            <input className={styles.title} type="text" name="title" defaultValue={card.title}></input>
            <input className={styles.email} type="text" name="email" defaultValue={card.email}></input>
        </div>
        <textarea className={styles.message} type="text" name="message" defaultValue={card.message}></textarea>
        <div className={styles.line4}>
            <button className={styles.fileBtn} >{fileName}</button>
            <button className={styles.deleteBtn}>Delete</button>
        </div>
        
    </form>  
    );}

export default CardMakerItem;