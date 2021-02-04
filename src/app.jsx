import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Main from './components/main/main';

function App({authService}) {
 
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact>
          <div className={styles.app}>
            <Login 
              authService={authService}/>
          </div>
        </Route>
        <Route path={'/main'} exact>
        <Main
          authService={authService}/>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
   
  );
}

export default App;
