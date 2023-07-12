import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Scrolling from './components/Scrolling'
import Servis from './components/Servis'
import Recommend from './components/Recommend'
import Test from './components/Reviews'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <Scrolling />
      <Navbar />
      <Hero />
      <Servis />
      <Recommend />
      <Test />
      <Footer />
    </>
  )
}

