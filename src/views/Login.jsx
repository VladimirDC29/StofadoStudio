import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [err, setErr] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    // Demo auth: password must be 'admin' — change as needed.
    if(pass === 'admin'){
      localStorage.setItem('stofado_auth','1')
      navigate('/home/dashboard')
    } else {
      setErr('Acceso denegado — credenciales inválidas')
    }
  }

  return (
    <div style={{maxWidth:680, margin:'28px auto', padding:16}}>
      <h1>Login</h1>
      <p style={{color:'var(--muted)'}}>Introduce tus credenciales para acceder al dashboard del proyecto.</p>
      <form onSubmit={submit} style={{display:'grid',gap:12}}>
        <input placeholder="Usuario" value={user} onChange={e=>setUser(e.target.value)} style={{padding:10,borderRadius:6,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'white'}} />
        <input placeholder="Contraseña" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{padding:10,borderRadius:6,border:'1px solid rgba(255,255,255,0.06)',background:'transparent',color:'white'}} />
        <div style={{display:'flex',gap:8}}>
          <button type="submit" style={{padding:'10px 14px',background:'var(--accent)',border:'none',borderRadius:6,cursor:'pointer'}}>Entrar</button>
          <button type="button" onClick={()=>{ setUser(''); setPass(''); setErr('') }} style={{padding:'10px 14px',background:'transparent',border:'1px solid rgba(255,255,255,0.06)',borderRadius:6,cursor:'pointer',color:'var(--muted)'}}>Limpiar</button>
        </div>
        {err && <div style={{color:'#ff6b6b'}}>{err}</div>}
        <div style={{color:'var(--muted)',fontSize:13}}>Demo note: contraseña de ejemplo es <strong>admin</strong>. Cambia la lógica de autenticación para producción.</div>
      </form>
    </div>
  )
}
