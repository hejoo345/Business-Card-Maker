import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardMakerList from '../cardMakerList/cardMakerList';
import CardPreviewList from '../cardPreviewList/cardPreviewList';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({FileInput, authService, cardRepository}) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState&&historyState.id);

    const history = useHistory();

    const onLogout = useCallback(() =>{
        authService.logout();
    },[authService]);


    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
        setCards(cards);
        });
        return () => stopSync();
    }, [userId, cardRepository]);

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(user){
                setUserId(user.uid);
            }else{
                history.push('/');
            }
        })
    },[authService, userId, history]);

    const onCardUpdate = (card)=>{
        setCards(cards=>{
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const onCardDelete = (card) =>{
        setCards(cards=>{
            const newCards = {...cards};
            delete newCards[card.id];
            return newCards;
        })
        cardRepository.removeCard(userId, card);
    }

    const onCardAdd = (card) =>{
        setCards(cards=>{
            const newCards = {...cards};
            newCards[card.id]= card;
            return newCards;
        })
        cardRepository.saveCard(userId, card);
    }

    return(
        
        <section className={styles.main}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <CardMakerList
                FileInput={FileInput}
                cards={cards} 
                onCardDelete={onCardDelete}
                onCardUpdate={onCardUpdate}
                onCardAdd={onCardAdd}/>

                <CardPreviewList cards={cards}/>
            </div>
        </section>
    );
    };

export default Main;