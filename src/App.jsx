import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HiddenLoginButton from './components/HiddenLoginButton'

export default function App(){
  return (
    <div className="app-root">
      <HiddenLoginButton />
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
