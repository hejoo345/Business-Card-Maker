import React, { memo } from 'react';
// import ImgInputButton from '../imgInputButton/imgInputButton';
import styles from './cardMakerItem.module.css';

const CardMakerItem = memo(({FileInput, card, onCardDelete, editCardHandler,onFileChange}) => {

    
    const onCardDel = (e) =>{
        e.preventDefault();
        onCardDelete(card.id);
    }

    const fileName = card.fileName || 'No File';
    return(
        <form className={styles.cardMakerItem}>
        <div className={styles.line1}>
            <input className={styles.name} type="text" id={card.id} name="name" defaultValue={card.name} onChange={editCardHandler}></input>
            <input className={styles.company} type="text" id={card.id} name="company" defaultValue={card.company} onChange={editCardHandler}></input>
            <select className={styles.theme} name="theme" id={card.id} defaultValue={card.theme} onChange={editCardHandler}>
                <option value="Light">Light</option>
                <option value="Dark">Black</option>
                <option value="Beige">Beige</option>
            </select>
        </div>
        <div className={styles.line2}>
            <input className={styles.title} type="text" id={card.id} name="title" defaultValue={card.title} onChange={editCardHandler}></input>
            <input className={styles.email} type="text" id={card.id} name="email" defaultValue={card.email} onChange={editCardHandler}></input>
        </div>
        <textarea className={styles.message} type="text" id={card.id} name="message" defaultValue={card.message} onChange={editCardHandler}></textarea>
        <div className={styles.line4}>
            <FileInput fileName={fileName}
            cardId={card.id}
            onFileChange={onFileChange}/>
            <button className={styles.deleteBtn} onClick={onCardDel}>Delete</button>
        </div>
        
    </form>  
    );})

export default CardMakerItem;