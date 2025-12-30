import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ajay from './components/Ajay.tsx'
import './main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Ajay />
  </StrictMode>,
)
