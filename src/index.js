import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImgUploader from './service/img_uploader';
import ImgInputButton from './components/imgInputButton/imgInputButton';

const authService = new AuthService();
const imgUploader = new ImgUploader();
const FileInput = props =>(
  <ImgInputButton {...props} imgUploader={imgUploader}/>
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);

