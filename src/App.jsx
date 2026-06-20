import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Marquee from './components/Marquee'
import About from './components/About'
import InstagramGallery from './components/InstagramGallery'
import Kitten from './components/Kitten'
import Bloodline from './components/Bloodline'
import FeaturedVideo from './components/FeaturedVideo'
import WhyChoose from './components/WhyChoose'
import Shop from './components/Shop'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NewsSection from './components/NewsSection'
import NewsPage from './components/NewsPage'
import NewsDetail from './components/NewsDetail'

function App() {
  const [view, setView] = useState({ name: 'home', id: null });

  const handleNavigate = (name, id = null) => {
    setView({ name, id });
    window.scrollTo(0, 0);
  };

  // Sync with browser back/forward if possible (optional, but good for "link biasa" feel)
  useEffect(() => {
    const handlePopState = () => {
      // Basic implementation: if back button is pressed, go home
      setView({ name: 'home', id: null });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="App selection:bg-tertiary selection:text-white font-body text-sm bg-[#fef6ee] min-h-screen overflow-x-hidden">
      <Header onNavigate={handleNavigate} />
      
      <main className='overflow-x-hidden'>
        {view.name === 'home' && (
          <>
            <Intro />
            <Marquee />
            <About />
            <InstagramGallery />
            <Kitten />
            <Bloodline />
            <FeaturedVideo />
            {/* <NewsSection onNavigate={handleNavigate} /> */}
            <WhyChoose />
            <Shop />
            <Testimonial />
            <FAQ />
            <Contact />
          </>
        )}

        {view.name === 'news-list' && (
          <NewsPage onNavigate={handleNavigate} />
        )}

        {view.name === 'news-detail' && (
          <NewsDetail id={view.id} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App
