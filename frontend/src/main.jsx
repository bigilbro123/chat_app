import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AthuContextProvider } from './context/AthuContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AthuContextProvider>
        <App />
      </AthuContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
