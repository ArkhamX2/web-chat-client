import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/Routes.js'
import { AuthContext } from '../context/index.js';

const AppRouter = () => {
  const {isAuth,setIsAuth, isLoading} = useContext(AuthContext);

  if(isLoading){
    return <h1>Загрузка</h1>
  }

  return (
    isAuth
    ?
      <Routes>
          {privateRoutes.map(({path,Element}, key) => <Route exact path={path} element={<Element/>} key={key}/>)}
          <Route path="*" element={<Navigate to="/rooms" replace/>}/>
      </Routes>
    :
      <Routes>
          {publicRoutes.map(({path,Element}, key) => <Route exact path={path} element={<Element/>} key={key}/>)}
          <Route path="*" element={<Navigate to="/login" replace/>}/>
      </Routes>
    
  )
}

export default AppRouter
