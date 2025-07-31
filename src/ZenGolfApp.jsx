
import { useState } from "react"

export default function ZenGolfApp() {
  const [progress, setProgress] = useState(60)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Zen Golf Training – Paribuddha</h1>

      <div className="w-full max-w-2xl mb-4 bg-white shadow-md rounded-2xl p-4">
        <img
          src="https://inner-skills.com/wp-content/uploads/2024/06/Paribuddha-portrait.jpg"
          alt="Paribuddha"
          className="rounded-2xl w-full object-cover mb-4"
        />
        <p className="text-center italic">
          "Ich atme ein – ich lade Spannung. Ich atme aus – ich lasse los."
        </p>
      </div>

      <div className="w-full max-w-2xl mb-4 bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-xl font-semibold">Drill des Tages: Pump-Drill</h2>
        <p className="mt-2">
          Fokussiere dich heute auf Lag & Timing. 3 Wiederholungen aus dem Top-of-Backswing, dann flüssiger Schwung mit Hüftstart.
        </p>
        <a
          href="https://www.youtube.com/watch?v=tgNDYHv0eFg"
          target="_blank"
          className="text-blue-600 underline inline-block mt-2"
        >
          Video ansehen (YouTube)
        </a>
      </div>

      <div className="w-full max-w-2xl mb-4 bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Fortschritt</h2>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <a
          href="https://docs.google.com/spreadsheets/d/1LMtsvLD3r9IJ_OUAUBt1hHdTGxaIjnRShlTAUxdXzBo/edit"
          target="_blank"
          className="text-blue-600 underline"
        >
          Fortschrittsjournal öffnen (Google Sheet)
        </a>
      </div>

      <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-xl font-semibold mb-2">Tagesreflexion</h2>
        <input
          type="text"
          placeholder="Was habe ich heute gespürt, verändert, entdeckt?"
          className="w-full border border-gray-300 rounded-lg p-2"
        />
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-xl">
          Eintragen
        </button>
      </div>
    </div>
  )
}
