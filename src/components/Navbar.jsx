import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const items = [
  {to:'about',label:'About us'},
  {to:'animation',label:'Animation'},
  {to:'graph-design',label:'Graph Design'},
  {to:'3d-modeling',label:'3D Modeling'},
  {to:'game-design',label:'Game Design'},
  {to:'music',label:'Music'},
  {to:'programming',label:'Programming'},
  {to:'cinema',label:'Cinema'},
]

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <div className="brand" onClick={()=>navigate('/home')}>Stofado Studio</div>
      <div className={`menu ${open? 'open':''}`}>
        <button className="menu-button" onClick={()=>setOpen(v=>!v)}>Menu ▾</button>
        <div className="dropdown" role="menu">
          {items.map(it=> (
            <Link key={it.to} to={it.to} onClick={()=>setOpen(false)}>{it.label}</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
