import React from 'react'
import About from '../components/About'

import ContactSection from '../components/ContactSection'
import Education from '../components/Education'
import Experience from '../components/Experience'
import HeroSection from '../components/HeroSection'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from "../components/Footer"


const Home = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Education/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default Home
