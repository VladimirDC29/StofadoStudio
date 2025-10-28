import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Splash from './components/Splash'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import AnimationView from './views/Animation'
import GraphDesign from './views/GraphDesign'
import Modeling3D from './views/Modeling3D'
import GameDesign from './views/GameDesign'
import Music from './views/Music'
import Programming from './views/Programming'
import Cinema from './views/Cinema'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Minutes from './views/Minutes'
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="animation" element={<AnimationView />} />
          <Route path="graph-design" element={<GraphDesign />} />
          <Route path="3d-modeling" element={<Modeling3D />} />
          <Route path="game-design" element={<GameDesign />} />
          <Route path="music" element={<Music />} />
          <Route path="programming" element={<Programming />} />
          <Route path="cinema" element={<Cinema />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="minutes" element={<Minutes />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
