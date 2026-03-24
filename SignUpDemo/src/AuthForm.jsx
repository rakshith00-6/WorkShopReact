import React, { useState } from 'react'

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <div className='container'>
        <div className='form-container'> 
        <div className='form-toggle'>
        <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin(true)}>Login</button>
        <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? <>
        <div className='form'>
            <h2>Login Form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <a href='#' > Forgot Password</a>
            <button>Login</button>
            <p>Not a member ? <a href='#' onClick={()=>setIsLogin(false)}>SignUp Now</a></p>
        </div>

        </> : <>
        <div className='form'> 
        <h2>Signup Form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='password' placeholder='Confirm Password'></input>
            <button>Sign Up</button>
             </div>
        </>}
        </div>
        
    </div>
  )
}
