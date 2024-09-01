import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Service from './component/service/Service'
import Mywork from './component/MyWork/Mywork'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
