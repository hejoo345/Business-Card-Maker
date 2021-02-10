import React, { memo, useRef, useState } from 'react';
import styles from './imgInputButton.module.css';

const ImgInputButton = memo(({fileName, cardId, imgUploader, onFileChange}) => {

    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const onButtonClick=(e)=>{
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange=async (e)=>{
        setLoading(true);
        const uploaded = await imgUploader.upload(e.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url:uploaded.url,
        })
    }
    return(
            <div className={styles.container}>
                <input 
                ref={inputRef}
                className={styles.fileBtn} type="file" id={cardId}
                accept='image/jpg, image/png, image/jpeg'
                onChange={onChange}
                ></input>
                {
                    !loading&&
                    <button className={styles.button}
                    onClick={onButtonClick}>
                        {fileName||'No File'}
                    </button>
                }
                {
                    loading &&
                    <div className={styles.loading}></div>
                }
            </div>
    )}
    )

export default ImgInputButton;