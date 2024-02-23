import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import enroll from '../assets/enroll2.jpg'
import Hero from '../components/Hero'
import UserForm from '../components/userForm'

const Enroll = () => {
    return (
        <div>
            <Navbar />
            <Hero title='Begin Your Healing Journey' description=' Enroll in our support network and embark on your path to improved mental health and well-being.' img={enroll} />
            <UserForm />
            <Footer />

        </div>
    )
}

export default Enroll
