import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MachineContext } from './machine'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MachineContext.Provider>
      <App />
    </MachineContext.Provider>
  </React.StrictMode>,
)
