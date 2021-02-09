import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import CardMakerAdd from '../cardMakerList/cardMakerAdd';
import CardMakerList from '../cardMakerList/cardMakerList';
import CardPreviewList from '../cardPreviewList/cardPreviewList';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({FileInput, authService}) => {
    const history = useHistory();

    const [cards, setCards] = useState([
        {
            id: 1,
            name: 'jisung',
            company: 'sm',
            theme: 'Light',
            title: '햄찌',
            email: 'js@gmail.com',
            message: 'msg',
            fileName: '',
            fileURL: '',
        },
        {
            id: 2,
            name: 'jungwoo',
            company: 'sm',
            theme: 'Dark',
            title: '오복',
            email: 'jw@gmail.com',
            message: 'msg',
            fileName: '',
            fileURL: '',
        },
        {
            id: 3,
            name: 'mark',
            company: 'sm',
            theme: 'Beige',
            title: 'onyour__mark',
            email: 'mark@gmail.com',
            message: 'msg',
            fileName: '',
            fileURL: '',
        },
    ])

        const onFileChange = (file) =>{
            const newCards = cards.map(item=>{
                if(item.id===file.id){
                    return {...item, fileName:file.name, fileURL:file.url};
                }
                return item;
            })
            setCards(newCards);
        }

        const editCardHandler = (e)=>{
            const newCards = cards.map(item=>{
                if(item.id == e.currentTarget.id){
                    const value = e.currentTarget.value;
                    switch(e.currentTarget.name){
                        case 'name':
                            return {...item, name: value};
                        case 'company':
                            return {...item, company: value};
                        case 'theme':
                            return {...item, theme: value};
                        case 'title':
                            return {...item, title: value};
                        case 'email':
                            return {...item, email: value};
                        case 'message':
                            return {...item, message: value};
                    }
                }
                return item;
            })
            setCards(newCards);
        }

        const onCardDelete = (cardId) =>{
            console.log(cardId);
            const newCards = cards.filter(item=>item.id!==cardId);
            setCards(newCards);
        }
    
        const onCardAdd = (newCard) =>{
            console.log('추가완');
            const newCards = [...cards, newCard];
            setCards(newCards);
        }

        const onLogout = () =>{
            authService.logout();
            console.log("로그아웃함");

        };   

        useEffect(()=>{
            authService.onAuthChange(user=>{
                if(!user){
                    history.push('/');
                }
            })
        })

        return(
            <>
            <Header onLogout={onLogout}/>
            <section className={styles.main}>
                <section className={styles.cardMaker}>
                    <h1 className={styles.cardMakerTitle}>Card Maker</h1>
                    <CardMakerList
                    FileInput={FileInput}
                    cards={cards} 
                    onCardDelete={onCardDelete} 
                    editCardHandler={editCardHandler}
                    onFileChange={onFileChange}/>
                    <CardMakerAdd 
                    FileInput={FileInput}
                    onCardAdd={onCardAdd}
                    onFileChange={onFileChange}/>
                </section>
                <section className={styles.cardPreview}>
                    <h1 className={styles.cardPreviewTitle}>Card Preview</h1>
                    <CardPreviewList cards={cards}/>
                </section>
            </section>
            <Footer/>
            </>
        );
        };

export default Main;