/*eslint-disable*/
import '@babel/polyfill';
import axios from 'axios';

import { login } from './login';

const button = document.getElementsByClassName('login-box-submit-button');
console.log(button)
if(button){
    
    button.addEventListener('click', e => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login(name,username, password);

    } )
}
