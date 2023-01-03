import { useState, useEffect } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LobbyPage from './pages/LobbyPage';
import GamePage from './pages/GamePage';
import UserPage from './pages/UserPage';
import { useCookies } from 'react-cookie';
import { Cookies as CookieType } from './constants/interfaces';

function App() {

  // useEffect(() => {
  //     getAuth()
  // }, [])

  // async function getAuth () {
  //   const res = await fetch('http://localhost:8081/oauth');
  //   const data = await res.json();
  //   console.log(data.data);
  // }

  // Cookie to be used for authentication and storing JWT of user
  const [cookies, setCookie, removeCookies] = useCookies();

  return (
    //not sure if these divs are supposed to be here tbh
    // <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    // <div className="max-w-none w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage cookies={cookies} setCookie={setCookie}/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/lobby" element={<LobbyPage/>} />
            <Route path="/game" element={<GamePage/>} />
            <Route path="/user" element={<UserPage/>} />
        </Routes>
      </BrowserRouter>
  //     </div>
  // </div>

  )
}

export default App
