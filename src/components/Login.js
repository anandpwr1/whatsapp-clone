import { Button } from '@mui/material'
import React from 'react'
import { provider } from '../firebase'
import './Login.css'
import { auth } from '../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
const Login = () => {
    const [{ }, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className="login__container">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    <p>Sign in with Google</p>
                </Button>
            </div>
        </div>
    )
}
export default Login;
