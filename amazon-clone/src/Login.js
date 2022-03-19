import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
// import { useState } from 'react';
import {auth} from "./Config/Config";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    
    const signIn = e =>
    { 
           e.preventDefault();

           auth
           .signInWithEmailAndPassword(email, password)
           .then (auth => {
               history.push('/')
           
           })
           .catch(error => alert(error.message))


    } //function created to signin, firebase login


    const signUp = e =>
    { 
           e.preventDefault();

           auth
           .createUserWithEmailAndPassword(email,password)
           .then((auth) => {
            //succesfully create new user w password and email
            //    console.log(auth);
               if (auth) {
                history.push('/')

               }
           })
           .catch(error => alert(error.message))


    }
  return (
    <div className='login'>
        <Link to= '/'>
            <img 
            className='login__logo' 
            src='https://logodix.com/logo/595167.png'
            />
        
        </Link>

        <div className='login__container'> 
        <h1> Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange= {e=> setEmail(e.target.value)} />
            
            <h5>Password</h5>
            <input type="password" value={password} onChange= {e=> setpassword(e.target.value)}/> 
            <button onClick={signIn} className='login_signinButton'> Sign in</button>
            {/* password defined as ***** */}
        </form>
        <p>
            Write everything you want here :)
        </p>
        <button onClick={signUp} className='login_sign_upButton'> Sign up </button>
        </div>
    </div>
  )
}

export default Login