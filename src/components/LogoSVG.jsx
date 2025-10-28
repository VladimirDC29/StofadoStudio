import React from 'react'

export default function LogoSVG({size=300, className=''}){
  const style = {width: size, height: 'auto', display:'block', margin:'0 auto'}
  return (
    <svg
      className={`logo-svg ${className}`}
      viewBox="0 0 600 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Stofado logo"
      style={style}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="transparent" />

      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Orbitron, sans-serif" fontWeight="700" fontSize="64"
        className="text-stroke">
        STOFADO
      </text>

      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Orbitron, sans-serif" fontWeight="700" fontSize="64"
        fill="rgba(57,255,191,0.07)" className="text-fill" filter="url(#glow)">
        STOFADO
      </text>

    </svg>
  )
}
