import React from 'react';
import styles from './cardMakerAdd.module.css';
const CardMakerAdd = (props) => {
    return(
        <form className={styles.cardMakerAdd}>
            <div className={styles.line1}>
                <input className={styles.name} type="text" placeholder="Name"></input>
                <input className={styles.company} type="text" placeholder="Company"></input>
                <select className={styles.theme}>
                    <option value="Light">Light</option>
                    <option value="Black">Black</option>
                    <option value="Pink">Pink</option>
                </select>
            </div>
            <div className={styles.line2}>
                <input className={styles.title} type="text" placeholder="Title"></input>
                <input className={styles.email} type="text" placeholder="E-mail"></input>
            </div>
            <div className={styles.line3}>
                <input className={styles.message} type="text" placeholder="Message"></input>
            </div>
            <div className={styles.line4}>
                <button className={styles.fileBtn}>No File</button>
                <button className={styles.addBtn}>Add</button>
            </div>
        </form>  
    )};

export default CardMakerAdd;