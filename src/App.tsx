import LoginForm from "./components/LoginForm"
import { useEffect } from 'react'
import { useActions } from "./hooks/useActions"
import { useTypedSelector } from "./hooks/useTypedSelector"
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/UI/Navbar/Navbar"
import AppRouter from "./components/AppRouter"

function App() {

  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App