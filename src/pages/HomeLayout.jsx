import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
// import Sidebar from '../components/Sidebar'

const HomeLayout = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout
