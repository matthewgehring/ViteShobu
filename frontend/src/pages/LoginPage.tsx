import { useState, useEffect } from 'react'
import Header from "../components/Auth/Header"
import Login from '../components/Auth/Login'
import { Cookie, setCookie } from '../constants/interfaces';
import { CookieSaveOptions } from '../constants/interfaces';

function LoginPage({cookies, setCookie}: {cookies: Cookie, setCookie: setCookie}) {
  
  return (
    <>
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login cookies={cookies} setCookie={setCookie}/>
    </>
  )
}

export default LoginPage