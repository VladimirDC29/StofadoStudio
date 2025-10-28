import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export default function Dashboard(){
  const authed = localStorage.getItem('stofado_auth') === '1'
  if(!authed) return <Navigate to="/home/login" replace />

  const projects = [
    {id:1,name:'Proyecto A', status:'En progreso', progress:72},
    {id:2,name:'Proyecto B', status:'En espera', progress:18},
    {id:3,name:'Proyecto C', status:'Completado', progress:100},
  ]

  return (
    <div>
      <h1>Project Status Dashboard</h1>
      <p style={{color:'var(--muted)'}}>Resumen rápido de los proyectos.</p>
      <div style={{display:'grid',gap:12,marginTop:12}}>
        {projects.map(p=> (
          <div key={p.id} style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <strong>{p.name}</strong>
              <span style={{color:'var(--muted)'}}>{p.status}</span>
            </div>
            <div style={{height:8,background:'rgba(255,255,255,0.03)',borderRadius:6,marginTop:8,overflow:'hidden'}}>
              <div style={{width:`${p.progress}%`,height:'100%',background:'var(--accent)'}} />
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:18}}>
        <Link to="/home/minutes" style={{color:'var(--accent)',textDecoration:'none'}}>Ver actas de reuniones pasadas</Link>
      </div>
    </div>
  )
}
