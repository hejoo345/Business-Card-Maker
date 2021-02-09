import React, { memo, useState } from 'react';
import ImgInputButton from '../imgInputButton/imgInputButton';
import styles from './cardMakerAdd.module.css';
const CardMakerAdd = memo(({onCardAdd}) => {
    
    const formRef = React.createRef();
    const nameRef = React.createRef();
    const companyRef = React.createRef();
    const themeRef = React.createRef();
    const titleRef = React.createRef();
    const emailRef = React.createRef();
    const messageRef = React.createRef();

    const fileName = 'No File';
    const [filename, setFilename] =useState(null);
    const [previewURL, setURL]= useState(null);

    const onSubmit = (e) =>{
        e.preventDefault();
        const newCard = {
            
            id : Date.now(),
            name : nameRef.current.value || '',
            company: companyRef.current.value ||'',
            theme: themeRef.current.value || '',
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',     
            fileName: filename ||'',
            fileURL: previewURL || '',
        }
        formRef.current.reset();
        onCardAdd(newCard);
    }
        const getFileNameAndURL = (fileName , previewURL)=>{
            setFilename(fileName);
            setURL(previewURL);
        }
    return(
        <form ref={formRef}className={styles.cardMakerAdd} onSubmit={onSubmit}>
            <div className={styles.line1}>
                <input ref={nameRef} className={styles.name} type="text" name="name" placeholder="name"   ></input>
                <input ref={companyRef} className={styles.company} type="text" name="company" placeholder="company"  ></input>
                <select ref={themeRef} className={styles.theme} name="theme" >
                    <option value="Light">Light</option>
                    <option value="Dark">Black</option>
                    <option value="Beige">Beige</option>
                </select>
            </div>
            <div className={styles.line2}>
                <input ref={titleRef} className={styles.title} type="text" name="title" placeholder="title"  ></input>
                <input ref={emailRef} className={styles.email} type="text" name="email"placeholder="email"  ></input>
            </div>
                <textarea ref={messageRef} className={styles.message} type="text" name="message" placeholder="message"  ></textarea>
            <div className={styles.line4}>
                <ImgInputButton fileName={fileName} 
                getFileNameAndURL={getFileNameAndURL}/>
                {/* <input type="file" className={styles.fileBtn} ></input> */}
                <button className={styles.addBtn}>Add</button>
            </div>
        </form>  
    )}
    )

export default CardMakerAdd;