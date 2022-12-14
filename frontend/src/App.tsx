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
import NavBar from './components/inprogress/navbar';

function App() {

  useEffect(() => {
      getAuth()
  }, [])

  async function getAuth () {
    const res = await fetch('http://localhost:8081/oauth');
    const data = await res.json();
    console.log(data.data);
  }

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/lobby" element={<LobbyPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
  </div>

  )
}

export default App
