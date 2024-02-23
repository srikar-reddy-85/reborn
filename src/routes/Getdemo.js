import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import getdemo from '../assets/getdemo2.jpg'
import Hero from '../components/Hero'


const Getdemo = () => {
    return (
        <div>
            <Navbar />
            <Hero title='Experience Our Approach' description=' Try out a therapy session demo to understand our approach and how it can benefit you.' img={getdemo} />
            <Footer />

        </div>
    )
}

export default Getdemo
