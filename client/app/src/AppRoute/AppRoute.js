import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/login/Login'


function AppRoute() {
  return (
    <div>
      <Routes>
      <Route path='/login' element={<Login/>} />

    </Routes>

    </div>

  )
}

export default AppRoute