import React from 'react';
import './Card.css'; // Create a CSS file for styling

const Card = ({ imageUrl, title, description }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="overlay"></div>
            <div className="text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
