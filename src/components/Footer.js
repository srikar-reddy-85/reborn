// src/components/Footer.js

import React, { useState } from 'react';
import './Footer.css';
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import supabase from '../config/superbaseClient'


const Footer = () => {
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const sendEmail = async () => {
        try {
            const { data, error } = await supabase
                .from('subscribers')
                .insert([{ email }])
                .select();

            if (error) {
                console.error('Error sending email:', error);
                setConfirmation('Failed to subscribe. Please try again.');
            } else {
                console.log('Email sent successfully:', data);
                setEmail(''); // Clear the email input
                setConfirmation('Thanks for subscribing!');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setConfirmation('Failed to subscribe. Please try again.');
        }
    };
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <h1>Contact Us:</h1>
                        <h3>Follow us on social media:</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target='_blank' >
                                <FaFacebook size={30} style={{ color: "#fff" }} />
                            </a>
                            <a href="https://twitter.com/" target='_blank'  >
                                <FaTwitter size={30} style={{ color: "#fff" }} />
                            </a>
                            <a href="https://www.linkedin.com/" target='_blank'  >
                                <FaLinkedin size={30} style={{ color: "#fff" }} />
                            </a>
                            <a href="https://www.instagram.com/" target='_blank'  >
                                <FaInstagram size={30} style={{ color: "#fff" }} />
                                {/* <i className="fa fa-instagram"></i> */}
                            </a>
                        </div>

                    </div>
                    <div className='col-2'>
                        <h2>Address:</h2>
                        <h4>Andhra pradesh,Kadapa</h4>
                        <h2>Phone No:</h2>
                        <h4>1234567890</h4>
                        <h2>Gmail:</h2>
                        <h4>Reborn@gmail.com</h4>
                    </div>
                    <div className='col-3'>
                        <h2>About us:</h2>
                        <p>At Reborn, we understand the importance of mental well-being, </p>
                        <p>we offer a guiding light towards a healthier mind.</p>
                        <p>Our mission is to provide,</p>
                        <p>accessible and effective online mental health solutions</p>
                        {/* <h2>Subscribe:</h2>
                        <input className='sub-text' type="gmail" />
                        <button className='button-50'>Send<FaArrowRight size={10} /></button> */}
                    </div>
                    <div>
                        <h2>Pages:</h2>
                        <div className='pages-foot'>
                            <Link to="/">Home</Link>
                            <Link to="/Treatment">Treatment</Link>
                            <Link to="/Resource">Resource</Link>
                            <Link to="/Getdemo">Getdemo</Link>
                            <Link to="/Enroll">Enroll</Link>
                        </div>
                        <h2>Subscribe:</h2>
                        <input className='sub-text' placeholder='E-mail...' type="gmail" value={email} onChange={handleEmailChange} />
                        <button className='button-50' onClick={sendEmail}>Send<FaArrowRight size={10} /></button>
                        {confirmation && <p>{confirmation}</p>}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

