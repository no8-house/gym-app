import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GymProvider } from './contexts/GymContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <GymProvider>
        <App />
      </GymProvider>
    </StrictMode>
  </BrowserRouter>,
)
