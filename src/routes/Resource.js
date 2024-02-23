import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import resource from '../assets/resources2.jpeg'
import Content from '../components/Content'
import Gridimg from '../components/Gridimg'


const Resource = () => {
    const contentImg = 'https://img.freepik.com/premium-vector/continuous-one-line-drawing-customer-service-is-constantly-interacting-with-different-consumers-resources-with-laptop-marketing-concept-single-line-draw-design-vector-graphic-illustration_638785-1177.jpg?w=2000'
    return (
        <div>
            <Navbar />
            <Hero title='Empowering Information Hub' description='Access valuable mental health resources and educational content to empower yourself.' img={resource} />
            <Content img={contentImg} description="Engaging with reading resources profoundly impacts mental health in multifaceted ways. Just as a trusted friend offers solace during times of solitude, books, articles, and self-help materials provide companionship, reducing feelings of isolation and fostering emotional resilience. Through the written word, individuals access valuable insights, coping strategies, and emotional support, equipping them with the tools to navigate the complex landscape of their own minds. Reading serves as a powerful cognitive exercise, stimulating mental agility and enhancing critical thinking, thus promoting overall cognitive wellness. Furthermore, it acts as an escape from daily stressors, enabling readers to immerse themselves in captivating narratives or self-help strategies, fostering relaxation and diminishing anxiety.The act of reading empowers individuals to take control of their mental well-being, offering a framework for personal growth and resilience. It encourages self-reflection and self-improvement, much like a journey of self-discovery. Through the exploration of different perspectives and the deepening of one's understanding of emotions and experiences, individuals gain a heightened sense of self-awareness and emotional intelligence. In this way, reading resources provide an invaluable pathway to enhanced mental health and a stronger sense of self, ultimately contributing to a more profound and fulfilling life." />
            <Gridimg />
            <Footer />
        </div>
    )
}

export default Resource
