import React, {useEffect} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Scrolling from './components/Scrolling'
import Servis from './components/Servis'
import Recommend from './components/Recommend'
import Test from './components/Test'
import Footer from './components/Footer'
import scrollreveal from 'scrollreveal'

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

   sr.reveal(
   `
   nav,
   #hero,
   #servis,
   #recommend,
   #test,
   #footer
   `,
   {
    opacity: 0,
    interval: 300,
   }
   )
  }, [])

  return (
      <>
      <Scrolling />
      <Navbar/>
      <Hero />
      <Servis />
      <Recommend />
      <Test />
      <Footer />
      </>
  )
}

