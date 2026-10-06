/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'



// import Counter from './Counter/Counter.tsx'
import Burger from './components/Burger/Burger.tsx'
//import SecurityCheckForm from './SecurityCheckForm/SecurityCheckForm.tsx'
// import Counter from './Counter/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<SecurityCheckForm /> */}
    {/* <Counter /> */}
    <Burger />
    
  </StrictMode>,
)

