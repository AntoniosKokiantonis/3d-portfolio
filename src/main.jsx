import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react"



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




// ReactDOM.createRoot(document.getElementById("root")
//                     <StrictMode>
//                       <BrowserRouter basename={import.meta.env.BASE_URL)
//                         <Routes>
//                           <Route path= "*" element={<App />} />
//                         </Routes>
//                         </BrowserRouter>
//                           </StrictMode>
