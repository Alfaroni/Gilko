import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Marquee from './components/Marquee'
import About from './components/About'
import InstagramGallery from './components/InstagramGallery'
import Kitten from './components/Kitten'
import WhyChoose from './components/WhyChoose'
import Shop from './components/Shop'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import ComingSoon from './components/ComingSoon'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App selection:bg-tertiary selection:text-white font-body text-sm bg-[#fef6ee] min-h-screen">
      {/* <ComingSoon /> */}
      <Header />
      <main>
        <Intro />
        <Marquee />
        <About />
        <InstagramGallery />
        <Kitten />
        <WhyChoose />
        <Shop />
        <Testimonial />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
