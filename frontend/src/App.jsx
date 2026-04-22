import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import './App.css'

const router=createBrowserRouter([
  {
    path : '/',
    element : <HomePage /> 
  },
  {
    path : '/login',
    element : <LoginPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
