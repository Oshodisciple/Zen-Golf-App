import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function ZenGolfApp() {
  const [progress, setProgress] = useState(60)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Zen Golf Training – Paribuddha</h1>

      <Card className="w-full max-w-2xl mb-4">
        <CardContent className="p-4">
          <img
            src="https://inner-skills.com/wp-content/uploads/2024/06/Paribuddha-portrait.jpg"
            alt="Paribuddha"
            className="rounded-2xl w-full object-cover mb-4"
          />
          <p className="text-center italic">
            "Ich atme ein – ich lade Spannung. Ich atme aus – ich lasse los."
          </p>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mb-4">
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Drill des Tages: Pump-Drill</h2>
          <p>
            Fokussiere dich heute auf Lag & Timing. 3 Wiederholungen aus dem Top-of-Backswing, dann flüssiger Schwung mit Hüftstart.
          </p>
          <a
            href="https://www.youtube.com/watch?v=tgNDYHv0eFg"
            target="_blank"
            className="text-blue-600 underline"
          >
            Video ansehen (YouTube)
          </a>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mb-4">
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Fortschritt</h2>
          <Progress value={progress} />
          <a
            href="https://docs.google.com/spreadsheets/d/1LMtsvLD3r9IJ_OUAUBt1hHdTGxaIjnRShlTAUxdXzBo/edit"
            target="_blank"
            className="text-blue-600 underline"
          >
            Fortschrittsjournal öffnen (Google Sheet)
          </a>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Tagesreflexion</h2>
          <Input placeholder="Was habe ich heute gespürt, verändert, entdeckt?" />
          <Button className="mt-2">Eintragen</Button>
        </CardContent>
      </Card>
    </div>
  )
}
