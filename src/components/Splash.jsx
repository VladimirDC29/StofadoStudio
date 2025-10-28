import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoSVG from './LogoSVG'

export default function Splash(){
  const nav = useNavigate()

  useEffect(()=>{
    const t = setTimeout(()=>{
      nav('/home')
    }, 5000)
    return ()=>clearTimeout(t)
  },[nav])

  return (
    <div className="splash">
      <div style={{textAlign:'center'}}>
        <div className="logo" style={{marginBottom:14}}>
          <div style={{fontSize:22,color:'var(--muted)',letterSpacing:2}}>Bienvenidos a</div>
        </div>
        <LogoSVG size={360} />
        <div className="byline">Cargando — entrando al futuro...</div>
      </div>
    </div>
  )
}
