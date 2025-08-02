import { useState } from 'react'

export default function ZenGolfApp() {
  const [progress, setProgress] = useState(60)

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.8rem', color: '#2e7d32' }}>Zen Golf Training – Paribuddha</h1>
     <img src={logo} alt="Masters Logo" className="w-40 mb-4" />


<h1 className="text-3xl font-bold text-center mb-6">MASTERS – Golf Pro Vocateur</h1>

      <p><em>"Ich atme ein – ich lade Spannung. Ich atme aus – ich lasse los."</em></p>

      <h2>Drill des Tages: Pump-Drill</h2>
      <p>Fokussiere dich heute auf Lag & Timing. 3 Wiederholungen aus dem Top-of-Backswing, dann flüssiger Schwung mit Hüftstart.</p>
      <a href="https://www.youtube.com/watch?v=tgNDYHv0eFg" target="_blank">Video ansehen (YouTube)</a>

      <h2 style={{ marginTop: '2rem' }}>Fortschritt</h2>
      <div style={{ width: '100%', background: '#ccc', borderRadius: 4, height: 20 }}>
        <div style={{ width: `${progress}%`, background: '#4caf50', height: '100%', borderRadius: 4 }}></div>
      </div>
      <a href="https://docs.google.com/spreadsheets/d/1LMtsvLD3r9IJ_OUAUBt1hHdTGxaIjnRShlTAUxdXzBo/edit" target="_blank">
        Fortschrittsjournal öffnen (Google Sheet)
      </a>

      <h2 style={{ marginTop: '2rem' }}>Tagesreflexion</h2>
      <input placeholder="Was habe ich heute gespürt?" style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }} />
      <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>Eintragen</button>
    </div>
  )
}
