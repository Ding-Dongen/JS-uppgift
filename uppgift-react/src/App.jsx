import { useState } from 'react'
import './assets/css/styles.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import TransactionSection from './components/TransactionSection.jsx'
import InformationSection from './components/InformationSection.jsx'
import SupportSection from './components/SupportSection.jsx'
import QuestionSection from './components/QuestionSection.jsx'
import SubscribeSection from './components/SubscribeSection.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <TransactionSection />
        <InformationSection />
        <SupportSection />
        <QuestionSection />
        <SubscribeSection />
      </main>
      <Footer />
    </>
  )
}

export default App
