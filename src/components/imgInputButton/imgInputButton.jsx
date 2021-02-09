import React, { memo, useRef } from 'react';
import styles from './imgInputButton.module.css';

const ImgInputButton = memo(({fileName, cardId, imgUploader, onFileChange}) => {

    const inputRef = useRef();

    const onButtonClick=(e)=>{
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange=async (e)=>{
        const uploaded = await imgUploader.upload(e.target.files[0]);
        console.log(uploaded);
        onFileChange({
            id: cardId,
            name: uploaded.original_filename,
            url:uploaded.url,
        }
        )
    }
    return(
            <div className={styles.container}>
                <input 
                ref={inputRef}
                className={styles.fileBtn} type="file" id={cardId}
                accept='image/jpg, image/png, image/jpeg'
                onChange={onChange}
                placeholder={fileName}
                ></input>
                <button className={styles.button} 
                onClick={onButtonClick}>{fileName||'No File'}</button>
            </div>
    )}
    )

export default ImgInputButton;