import { useState } from 'react'
import './assets/css/styles.css'
import './assets/css/contact.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'



function App() {



  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
