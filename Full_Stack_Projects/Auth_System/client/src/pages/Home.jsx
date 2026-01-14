import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const home = () => {
  return (
    <div classname="flex flex-col items-center justify-center min-h-screen bg-[url('/bg_img.png')] bg-cover bg-center">
      <Navbar />
      <Header />
    </div>
  )
}

export default home
