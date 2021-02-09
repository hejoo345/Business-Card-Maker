import React, { memo } from 'react';
import styles from './imgInputButton.module.css';

const ImgInputButton = memo(({fileName, cardId, onImgUpload, getFileNameAndURL}) => {
    
    const imgUploadHandler = (e) =>{
        
        e.preventDefault();
        
        const reader = new FileReader();
        const file = e.target.files[0];
        if(file.length===0) return;
        reader.onloadend = ()=>{
            const base64 = reader.result;
            if(onImgUpload){
                onImgUpload(cardId, file.name, base64);
            }else{
                getFileNameAndURL(file.name,base64);
                
            }
        }
        reader.readAsDataURL(file);
    

    }
    return(
        <>
            {/* <label className={styles.label} htmlFor="img" >{fileName}</label> */}
            <input className={styles.fileBtn} type="file" id={cardId}
            accept='image/jpg, image/png, image/jpeg'
            // onChange={e=>{imgUploadHandler(e.target.files[0])}}
            onChange={imgUploadHandler}
            placeholder={fileName}
            ></input>
        </>
    )}
    )

export default ImgInputButton;