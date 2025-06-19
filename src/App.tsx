import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './pages/blog/BlogPost';

// Service Pages
import AIDrivenContent from './pages/services/AIDrivenContent';
import TechnicalDocumentation from './pages/services/TechnicalDocumentation';
import WhitepapersAndCaseStudies from './pages/services/WhitepapersAndCaseStudies';
import TechEventCoverage from './pages/services/TechEventCoverage';
import AIAutomationServices from './pages/services/AIAutomationServices';
import AppBasedContentAndSites from './pages/services/AppBasedContentAndSites';
import BookmakingServices from './pages/services/BookmakingServices';
import WordPressWebsites from './pages/services/WordPressWebsites';

// Solution Pages
import APIReferenceDocumentation from './pages/solutions/APIReferenceDocumentation';

// Legal Pages
import TermsOfService from './pages/legal/TermsOfService';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';

function App() {
  const location = useLocation();

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <Home />
            <About />
            <Services />
            <FAQ />
            <BlogPreview />
            <Testimonials />
            <Contact />
          </main>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/services/ai-driven-content" element={<AIDrivenContent />} />
        <Route path="/services/technical-documentation" element={<TechnicalDocumentation />} />
        <Route path="/services/whitepapers-and-case-studies" element={<WhitepapersAndCaseStudies />} />
        <Route path="/services/tech-event-coverage" element={<TechEventCoverage />} />
        <Route path="/services/ai-automation-services" element={<AIAutomationServices />} />
        <Route path="/services/app-based-content-and-sites" element={<AppBasedContentAndSites />} />
        <Route path="/services/bookmaking-services" element={<BookmakingServices />} />
        <Route path="/services/wordpress-websites" element={<WordPressWebsites />} />
        <Route path="/services/solutions/api-reference-documentation" element={<APIReferenceDocumentation />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;