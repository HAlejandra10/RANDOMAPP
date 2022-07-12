import React from 'react';
import ReactDOM from 'react-dom/client';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider domain="halejandrapd26.us.auth0.com"
     clientId="upvuLEziZFag0A083xtyogdrE3kg2Uh1"
     redirectUri={window.location.origin}>
       <App />
    </Auth0Provider>
  </React.StrictMode>
);


