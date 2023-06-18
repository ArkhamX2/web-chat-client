import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../router/Routes.js'

const AppRouter = () => {
  return (
    <Routes>
        {routes.map(({path,Element}, key) => <Route exact path={path} element={<Element/>} key={key}/>)}
    </Routes>
  )
}

export default AppRouter
