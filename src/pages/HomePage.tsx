// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import Banner from '../components/Home/Banner';
import HomeContent from '../components/Home/HomeContent';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  // Add preloading for critical resources
  useEffect(() => {
    // Preload banner image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/images/banner_test.jpg';
    document.head.appendChild(preloadLink);
    
    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{
        lang: 'ro'
      }}>
        <title>Literatura Română în Dimensiune Virtuală | Concurs Național Interdisciplinar</title>
        <meta name="description" content="Concurs național interdisciplinar organizat de Liceul Teoretic de Informatică Grigore Moisil Iași care îmbină literatura română cu tehnologia." />
        <link rel="canonical" href="https://lrdv.netlify.app" />
        <meta property="og:title" content="Literatura Română în Dimensiune Virtuală" />
        <meta property="og:description" content="Concurs național interdisciplinar care valorifică performanțele elevilor de gimnaziu și liceu în utilizarea computerului și a potențialului creativ într-un demers personalizat de abordare a specificului cultural și literar național." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lrdv.netlify.app" />
        <meta property="og:image" content="https://lrdv.netlify.app/images/banner_test.jpg" />
      </Helmet>
      <div className="home-page">
        <Banner />
        <HomeContent />
      </div>
    </>
  );
};

export default HomePage;