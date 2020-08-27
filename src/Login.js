import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from 'firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
    };

    return (
        <div className='login'>
            <div className='login_container'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/896px-WhatsApp.svg.png"
                    alt=""
                />

                <div className='login_text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
