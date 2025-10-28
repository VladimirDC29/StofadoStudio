import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HiddenLoginButton(){
  const navigate = useNavigate()

  return (
    <div
      className="hidden-login-tab"
      title="Admin login"
      onClick={(e)=>{e.stopPropagation(); navigate('/home/login')}}
      role="button"
      aria-label="Open login"
    >
      <div className="tab-inner">Login</div>
    </div>
  )
}
