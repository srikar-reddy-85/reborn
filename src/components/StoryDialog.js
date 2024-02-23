import React from 'react';
import './StoryDialog.css'; // Create a CSS file for styling
import { X } from 'lucide-react';
// import { FaCross, FaXbox } from 'react-icons/fa';

const StoryDialog = ({ imageUrl, title, description, story, onClose }) => {
    return (
        <div className="story-dialog">
            <div className="dialog-content">
                <img src={imageUrl} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{story}</p>
                <button className='button1' onClick={onClose}><X /></button>
            </div>
        </div>

    );
};

export default StoryDialog;
