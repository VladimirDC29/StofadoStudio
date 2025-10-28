import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const SAMPLE = [
  {
    id:1,
    date:'2025-10-01',
    title:'Reunión de inicio - Proyecto A',
    notes:'Se definieron objetivos, prioridades y entregables. Responsables asignados: Ana (UI), Luis (Backend). Próxima reunión: 2025-10-08.'
  },
  {
    id:2,
    date:'2025-09-18',
    title:'Revisión técnica - Renders 3D',
    notes:'Se acordó pipeline para optimización de escenas, se probará export GLTF y reducción de texturas. Pendiente demo.'
  },
  {
    id:3,
    date:'2025-08-30',
    title:'Resumen creativo - Campaña otoño',
    notes:'Moodboard aprobado. Música provisional seleccionada. Producción de assets inicia 2025-09-05.'
  }
]

export default function Minutes(){
  const authed = localStorage.getItem('stofado_auth') === '1'
  const [open, setOpen] = useState(null)
  if(!authed) return <Navigate to="/home/login" replace />

  return (
    <div>
      <h1>Actas de reuniones</h1>
      <p style={{color:'var(--muted)'}}>Selecciona una acta para leer los detalles.</p>
      <div style={{display:'grid',gap:10,marginTop:12}}>
        {SAMPLE.map(item=> (
          <div key={item.id} style={{padding:12,background:'rgba(255,255,255,0.02)',borderRadius:8,border:'1px solid rgba(255,255,255,0.03)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <strong>{item.title}</strong>
                <div style={{color:'var(--muted)',fontSize:13}}>{item.date}</div>
              </div>
              <button onClick={()=>setOpen(open===item.id? null : item.id)} style={{background:'transparent',border:'1px solid rgba(255,255,255,0.06)',padding:'6px 10px',borderRadius:6,color:'var(--muted)',cursor:'pointer'}}>
                {open===item.id? 'Cerrar' : 'Leer'}
              </button>
            </div>
            {open===item.id && <div style={{marginTop:12,color:'var(--muted)'}}>{item.notes}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
