import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <h1>Zen Golf App</h1>
    <p>Welcome to your training space, Paribuddha.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
