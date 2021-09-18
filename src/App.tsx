import React from 'react';
import './App.scss';
import { Header, Hero, Skills, Projects, Contact, Footer } from './components'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />

      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
