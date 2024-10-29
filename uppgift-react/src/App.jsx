import { useState } from 'react'
import './assets/css/style.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import TransactionSection from './components/TransactionSection.jsx'
import InformationSection from './components/InformationSection.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <TransactionSection />
        <InformationSection />
      </main>
      <Footer />
    </>
  )
}

export default App
