import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
// import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const signIn = e =>
    { 
           e.preventDefault()

    } //function created to signin, firbase login


    const signUp = e =>
    { 
           e.preventDefault()

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
            <input type='text' value={email} onChnage= {e=> setEmail(e.target.value)} />
            
            <h5>Password</h5>
            <input type='password' value={password} onChnage= {e=> setpassword(e.target.value)}/> 
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