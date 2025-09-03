import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './pages/App0903-useRef-6.jsx'
// import './assets/all.scss'
// import App from './App0819a.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 嚴謹模式
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    
  </StrictMode>,
)
