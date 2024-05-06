import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Navbar from './components/navbar/navbar.jsx'
import Home from './components/home/Home.jsx'
import Information from './components/information/information.jsx'
import Footer from './components/footer/footer.jsx'
import About from './components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Contact from './components/Contact/Contact.jsx'







function App() {

   return <>
   
     <Navbar />
     <Home />
     <About />
 
     <Portfolio />
     <Contact />
     <Information />
    
     <Footer />
   
  </>
  
}

export default App
