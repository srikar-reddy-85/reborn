import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import treatment from '../assets/treatment2.jpg'
import Content from '../components/Content'
import Carousel2 from '../components/Carousel2'
import Carousel3 from '../components/Carousel3.tsx'


const Treatment = () => {
    const contentImg = 'https://static.vecteezy.com/system/resources/previews/028/714/850/original/continuous-one-line-drawing-young-smart-doctor-handshake-the-patient-in-hospital-after-running-test-on-lab-healthcare-medical-check-up-treatment-single-line-draw-design-graphic-illustration-vector.jpg'
    return (
        <div>
            <Navbar />
            <Hero title='Expert Therapy & Support' description=' Discover our tailored treatment options and professional guidance for a healthier mind.' img={treatment} />
            <Content img={contentImg} description='Treating mental health is akin to nurturing a precious garden within, where self-care becomes the art of tending to your inner landscape. Its a journey through the vast library of your mind, a quest filled with diverse terrains and adventurous exploration. Like a sculptor, you carve resilience, self-acceptance, and emotional well-being from the raw material of your experiences. This is an investment in the most valuable stock—your well-being portfolio, ensuring strength and adaptability. Your mental health journey is a dynamic narrative, with chapters of healing, growth, and personal transformation, where the blossoms of joy and the leaves of resilience flourish, creating a garden of well-being, ready to share its beauty with the world. Treating mental health is not only an act of self-compassion but also a courageous step towards unlocking the full spectrum of your potential. Its a process of fine-tuning your emotional harmony, like a skilled conductor orchestrating the symphony of your well-being. Just as a master chef blends various ingredients to create a flavorful dish, you combine self-awareness, coping strategies, and self-care practices to craft a recipe for a happier, more fulfilling life. This journey is an invitation to delve into the depths of your inner world, discovering hidden treasures, and sculpting a masterpiece that is uniquely you.' />
            <Carousel2 />
            <Carousel3 />
            <Footer />
        </div>
    )
}

export default Treatment
