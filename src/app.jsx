import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/main/main';

function App({FileInput, authService, cardRepository}) {
 
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <div className={styles.login}>
            <Login 
              authService={authService}/>
          </div>
        </Route>
        <Route path={'/main'} exact>
          <div className={styles.main}>
            <Main
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}/>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
   
  );
}

export default App;
