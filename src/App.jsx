import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './Components/Auth/Signup'
import Login from './Components/Auth/Login'
import { supabase } from './utils/supabaseClient'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'


function App() {

  const [user, setuser] = useState(false);
  useEffect(() => {
    const getuser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setuser(user);
    }
    getuser();

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session && session.user) {
        setuser(session.user);
      }
      else {
        setuser(null);
      }
    })
  }, [])


  return (

    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to={'/dashboard'} /> : <Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
