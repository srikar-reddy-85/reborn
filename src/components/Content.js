import React from 'react';
// import heroImage from '../assets/meditation.jpeg';
// import enroll from '../assets/enroll2.jpg'
// import doc from '../assets/doc.jpg'
import "./Content.css"
import { Link } from 'react-router-dom';


const Content = (props) => {
    const contentImg = props.img;
    const description = props.description;
    return (
        <div className="content-section">
            {/* <img
                src={doc}
                alt="Description"
                className="content-image"
            /> */}
            <img className="content-image" src={contentImg} alt="" />
            <div className='content-text'>
                {/* <p className="content-paragraph">
                    At our mental health consultancy, we understand that your mental well-being is of utmost importance. Our dedicated team of experienced therapists and counselors is committed to helping you on your journey to a happier and healthier life.
                    We offer a wide range of treatment options tailored to your unique needs. Whether you're dealing with anxiety, depression, stress, or other mental health challenges, we have the expertise and resources to support you.
                    Explore our comprehensive resources, including articles, videos, and self-help tools, to empower yourself with knowledge and strategies for managing your mental health. Get a glimpse of our therapeutic approach by requesting a demo session.
                    Ready to take the next step? Enroll in our support network and begin your healing journey today. We're here to provide you with the guidance, care, and understanding you deserve. Your well-being is our top priority.
                </p> */}
                <p>
                    {description}
                </p>
                {/* <p className="content-paragraph">
                    We offer a wide range of treatment options tailored to your unique needs. Whether you're dealing with anxiety, depression, stress, or other mental health challenges, we have the expertise and resources to support you.
                </p> */}
                {/* <p className="content-paragraph">
                    Explore our comprehensive resources, including articles, videos, and self-help tools, to empower yourself with knowledge and strategies for managing your mental health. Get a glimpse of our therapeutic approach by requesting a demo session.
                </p> */}
                <p className="content-paragraph">
                </p>
                <div className="content-buttons">
                    <Link to="/Getdemo" >
                        <button className="button">Getdemo</button>
                    </Link>
                    <Link to="/Enroll" >
                        <button className="button">Enroll</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Content;


