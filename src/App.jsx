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

    // Sync URL query params with current view state
    const url = new URL(window.location.href);
    if (name === 'news-detail' && id) {
      url.searchParams.set('news', id);
      url.searchParams.delete('page');
    } else if (name === 'news-list') {
      url.searchParams.set('page', 'news-list');
      url.searchParams.delete('news');
    } else {
      url.searchParams.delete('page');
      url.searchParams.delete('news');
    }
    window.history.pushState({}, '', url.pathname + url.search + url.hash);
  };

  // Sync state with browser back/forward buttons and initial URL parameters
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const newsId = params.get('news');
      const page = params.get('page');

      if (newsId) {
        setView({ name: 'news-detail', id: parseInt(newsId, 10) });
      } else if (page === 'news-list') {
        setView({ name: 'news-list', id: null });
      } else {
        setView({ name: 'home', id: null });
      }
    };

    // Run parsing on initial mount
    handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  return (
    <div className="App selection:bg-tertiary selection:text-white font-body text-sm bg-[#fef6ee] min-h-screen overflow-x-hidden">
      <Header currentView={view} onNavigate={handleNavigate} />
      
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
            <NewsSection onNavigate={handleNavigate} />
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
