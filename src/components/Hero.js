import React from 'react';
import './Hero.css';
// import heroImage from '../assets/meditation.jpeg';

const Hero = (props) => {
    // const [title, setTitle] = useState('Welcome to Our Website');
    // const [description, setDescription] = useState('Your message or description goes here.');
    const title = props.title;
    const description = props.description;
    // const heroImage = "https://i.pinimg.com/564x/ee/8b/13/ee8b13ed52118d9568a258841419afbd.jpg"
    const heroImage = props.img
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="hero-image">
                    <img height={450} width={450} src={heroImage} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

