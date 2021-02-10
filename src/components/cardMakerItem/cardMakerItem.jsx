import React, { memo } from 'react';
// import ImgInputButton from '../imgInputButton/imgInputButton';
import styles from './cardMakerItem.module.css';

const CardMakerItem = memo(({FileInput, card, onCardDelete, onCardUpdate}) => {

    const onChange = (e) =>{
        if(e.currentTarget == null) return;
        e.preventDefault();
        onCardUpdate({
            ...card,
            [e.currentTarget.name]:e.currentTarget.value,
        })
    }
    const onCardDel = (e) =>{
        e.preventDefault();
        onCardDelete(card);
    }
    
    const onFileChange = (file)=>{
        onCardUpdate({
            ...card,
            fileName: file.name,
            fileURL: file.url
        })
    }

    const fileName = card.fileName || 'No File';
    return(
        <form className={styles.cardMakerItem}>
        <div className={styles.line1}>
            <input className={styles.name} type="text" id={card.id} name="name" defaultValue={card.name} onChange={onChange}></input>
            <input className={styles.company} type="text" id={card.id} name="company" defaultValue={card.company} onChange={onChange}></input>
            <select className={styles.theme} name="theme" id={card.id} defaultValue={card.theme} onChange={onChange}>
                <option value="Light">Light</option>
                <option value="Dark">Dark</option>
                <option value="Beige">Beige</option>
            </select>
        </div>
        <div className={styles.line2}>
            <input className={styles.title} type="text" id={card.id} name="title" defaultValue={card.title} onChange={onChange}></input>
            <input className={styles.email} type="text" id={card.id} name="email" defaultValue={card.email} onChange={onChange}></input>
        </div>
        <textarea className={styles.message} type="text" id={card.id} name="message" defaultValue={card.message} onChange={onChange}></textarea>
        <div className={styles.line4}>
            <FileInput fileName={fileName}
            cardId={card.id}
            onFileChange={onFileChange}/>
            <button className={styles.deleteBtn} onClick={onCardDel}>Delete</button>
        </div>
        
    </form>  
    );})

export default CardMakerItem;