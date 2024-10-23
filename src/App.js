import React from 'react';
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar, NavigationDots, SocialMedia } from './components';
import './App.scss';

const app = () => {
  return (
    <div className='app'>
      <SocialMedia />
      <NavigationDots />

      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default app
