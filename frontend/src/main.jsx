import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
    <AuthContextProvider>
    <ToastContainer theme='dark' position='top-right' closeOnClick></ToastContainer>
    <App /></AuthContextProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
