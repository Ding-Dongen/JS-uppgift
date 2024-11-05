import React from 'react'
import Hero from './Hero.jsx'
import FeaturesSection from './FeaturesSection.jsx'
import TransactionSection from './TransactionSection.jsx'
import InformationSection from './InformationSection.jsx'
import SupportSection from './SupportSection.jsx'
import QuestionSection from './QuestionSection.jsx'
import SubscribeSection from './SubscribeSection.jsx'


const Home = () => {
  return (
    <>
        <Hero />
        <FeaturesSection />
        <TransactionSection />
        <InformationSection />
        <SupportSection />
        <QuestionSection />
        <SubscribeSection />
    </>
  )
}

export default Home