import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImgUploader from './service/img_uploader';
import ImgInputButton from './components/imgInputButton/imgInputButton';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imgUploader = new ImgUploader();
const cardRepository = new CardRepository();
const FileInput = memo(props =>(
  <ImgInputButton {...props} imgUploader={imgUploader}/>
));

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}
    FileInput={FileInput}
    cardRepository={cardRepository}/>
  </React.StrictMode>,
  document.getElementById('root')
);

