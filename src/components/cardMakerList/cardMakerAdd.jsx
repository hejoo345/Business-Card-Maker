import React, { useState } from 'react';
import styles from './cardMakerAdd.module.css';
const CardMakerAdd = ({onCardAdd}) => {
    
    const formRef = React.createRef();

    const [newCard , setNewCard] = useState({
        id:'',
        name: '',
        company: '',
        theme: '',
        title: '',
        email: '',
        message: '',        
    })

    const cardAddHandler= (e) =>{
        const kind = e.currentTarget;
        switch(kind.name){
            case 'name':
                return setNewCard({...newCard, name: kind.value, id: Date.now()});
            case 'company':
                return setNewCard({...newCard, company: kind.value});
            case 'theme':
                return setNewCard({...newCard, theme: kind.value});
            case 'title':
                return setNewCard({...newCard, title: kind.value});
            case 'email':
                return setNewCard({...newCard, email: kind.value});
            case 'message':
                return setNewCard({...newCard, message: kind.value});
            default:
                return console.error();
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        formRef.current.reset();
        onCardAdd(newCard);
    }
    return(
        <form ref={formRef}className={styles.cardMakerAdd} onSubmit={onSubmit}>
            <div className={styles.line1}>
                <input className={styles.name} type="text" name="name" placeholder="name" defaultValue="" onChange={cardAddHandler} ></input>
                <input className={styles.company} type="text" name="company" placeholder="company" defaultValue="" onChange={cardAddHandler}></input>
                <select className={styles.theme} name="theme" onChange={cardAddHandler} >
                    <option value="Light">Light</option>
                    <option value="Dark">Black</option>
                    <option value="Beige">Beige</option>
                </select>
            </div>
            <div className={styles.line2}>
                <input className={styles.title} type="text" name="title" placeholder="title" defaultValue="" onChange={cardAddHandler}></input>
                <input className={styles.email} type="text" name="email"placeholder="email" defaultValue="" onChange={cardAddHandler}></input>
            </div>
                <textarea className={styles.message} type="text" name="message" placeholder="message" defaultValue="" onChange={cardAddHandler}></textarea>
            <div className={styles.line4}>
                <button className={styles.fileBtn}>No File</button>
                <button className={styles.addBtn}>Add</button>
            </div>
        </form>  
    )};

export default CardMakerAdd;