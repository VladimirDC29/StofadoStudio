import React from 'react'
import LogoSVG from '../components/LogoSVG'

export default function Home(){
  return (
    <div>
      <section className="home-center">
        <div>
          <LogoSVG size={420} />
          <div className="placeholder">Aquí habrá una imagen o clip animado del logo.</div>
        </div>
      </section>
      <section>
        <h2 style={{color:'var(--muted)',textAlign:'center'}}>Armalo como más te guste</h2>
      </section>

      <section style={{marginTop:28}}>
        <h3 style={{color:'var(--muted)',textAlign:'center'}}>Ejemplo de media</h3>
        <div style={{maxWidth:920, margin:'18px auto', textAlign:'center'}}>
          <video width="720" controls style={{borderRadius:8, maxWidth:'100%'}}>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </section>
    </div>
  )
}
