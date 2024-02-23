import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ color, imgurl, title, fact }) {
    return (
        <div className={`scard-container scard-${color}`}>
            <div className='scard-content'>
                <img className='scard-image' src={imgurl} alt='Training' />
                <div className='scard-text'>
                    <h2 className='scard-title'>{title}</h2>
                    <p className='scard-facts'>{fact}</p>
                    <button className='button'>Learn more</button>
                </div>
            </div>
        </div>
    );
}

