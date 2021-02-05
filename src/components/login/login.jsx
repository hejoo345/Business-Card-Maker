import React, { useEffect } from 'react';
import styles from './login.module.css';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';


const Login = ({ authService}) => {
        const history = useHistory();
        
        useEffect(()=>{
            authService.onAuthChange(user=>{
                if(user){
                    goToMain(user.uid);
                }
            })
        });

        const goToMain=(userId)=>{
            history.push({
                pathname: '/main',
                state: {id: userId},
            })
        };

        const onLogin = event =>{
            authService.login(event.currentTarget.textContent)
            .then((data)=>{
                goToMain(data.user.uid);
            });
        }
        return(
            <>
            <section className={styles.login}>
                <Header/>
                <section className={styles.loginBox}>
                    <h3 className={styles.Login}>Login</h3>
                    <button className={styles.googleBtn} onClick={onLogin}>Google</button>
                    <button className={styles.githubBtn} onClick={onLogin}>Github</button>

                </section>
            </section>
            </>
        )
    };

export default Login;