import { useState, useEffect } from 'react'
import Header from "../components/Auth/Header"
import Login from '../components/Auth/Login'

function LoginPage() {
  
  return (
    <>
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        <Login/>
    </>
  )
}

export default LoginPage