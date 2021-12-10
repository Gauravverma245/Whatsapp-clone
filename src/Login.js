import React from 'react'
import './Login.css'
import { Button } from '@mui/material';
import {auth, provider} from './firebase'



function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp logo"/>

            <div className="login__text">
                <h1>Sign in to Whatsapp</h1>
            </div>

            <Button type="submit" onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
