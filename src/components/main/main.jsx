import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CardMakerAdd from '../cardMakerList/cardMakerAdd';
import CardMakerList from '../cardMakerList/cardMakerList';
import Header from '../header/header';
import styles from './main.module.css';

const Main = ({authService}) => {
    const history = useHistory();
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
            <section className={styles.main}>
            <Header onLogout={onLogout}/>
            <CardMakerList/>
            <CardMakerAdd/>
            </section>
        );
        };

export default Main;