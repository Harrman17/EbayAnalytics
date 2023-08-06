import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
export default function Login() {

  const [userLogin,setUserLogin] = useState({
    email: "",
    password: ""
  })

  function handleInput(e) {
    setUserLogin(prevInput => {return {
      ...prevInput,
      [e.target.name]: e.target.value
    }})
  }



  return (
    <div>
      <img className='ml-3 mt-3 h-[100px] absolute' src='/ebayanalyticscut.png'></img>
      <div className='h-screen flex justify-center items-center text-white font-poppins'>
        <div className='bg-secondary h-[550px] w-[530px] rounded-2xl overflow-hidden p-5'>
          <form className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl mb-5 font-medium'>Welcome Back!</h1>
            <div className='mb-6'>
            <label className='text-lg block'>Email Address</label>
            <input autoComplete='off' name='email' type='email' className='h-10 w-[350px] rounded-xl text-black pl-2 font-medium'  onChange={handleInput}></input>
            </div>
            <div className='mb-9'>
            <label className='text-lg block'>Password</label>
            <input autoComplete='off' name='password' type='password' className='h-10 w-[350px] rounded-xl text-black pl-2 font-medium' onChange={handleInput}></input>
            </div>
            <div className="g-recaptcha mb-6 -mt-3" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} data-theme="dark"></div>
            <button className='bg-accent w-[300px] h-12 rounded-2xl text-lg mb-5'>Log In</button>
            <p>Don't have an account? <Link to='/' className='underline text-accent'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}
