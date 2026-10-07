import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouting = ({children}) => {
  const token=JSON.parse(localStorage.getItem("jwt_token"))
  return  token ? children : <Navigate to={"/login"}/>
}

export default PrivateRouting