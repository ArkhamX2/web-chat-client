import React, { useEffect } from "react";
import '../src/styles/App.css'
import {BrowserRouter} from 'react-router-dom'
import { useState } from "react";

import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
    }}>
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
