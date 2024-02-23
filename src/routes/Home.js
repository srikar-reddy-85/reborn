import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Hero from '../components/Hero'
import meditaion from '../assets/meditation.jpeg'
import Content from '../components/Content'
import Carousel from '../components/Carousel'
import doc from '../assets/doc.jpg'
import HomeHero from '../components/HomeHero'
import Services from '../components/Services'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeHero title='Welcome to Our Sanctuary' description=' Discover healing and hope through expert guidance, support, and therapy for your well-being' img={meditaion} />
            <Content img={doc} description='At our mental health consultancy, we understand that your mental well-being is of utmost importance. Our dedicated team of experienced therapists and counselors is committed to helping you on your journey to a happier and healthier life.We offer a wide range of treatment options tailored to your unique needs. Whether youre dealing with anxiety, depression, stress, or other mental health challenges, we have the expertise and resources to support you.Explore our comprehensive resources, including articles, videos, and self-help tools, to empower yourself with knowledge and strategies for managing your mental health. Get a glimpse of our therapeutic approach by requesting a demo session.Ready to take the next step? Enroll in our support network and begin your healing journey today. Were here to provide you with the guidance, care, and understanding you deserve. Your well-being is our top priority.' />
            <Services />
            <Carousel />
            <Footer />
        </div>
    )
}

export default Home
