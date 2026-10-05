import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () => {
  return (
    <div className='w-screen'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default HomePageLayout