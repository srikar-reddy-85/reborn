// import React, { useState } from 'react';
// import './Hero.css';
// import Quiz from './Quiz';
// // import heroImage from '../assets/meditation.jpeg';

// const HomeHero = (props) => {
//     // const [title, setTitle] = useState('Welcome to Our Website');
//     // const [description, setDescription] = useState('Your message or description goes here.');
//     const [isOpen, setIsOpen] = useState(false);
//     const title = props.title;
//     const description = props.description;
//     // const heroImage = "https://i.pinimg.com/564x/ee/8b/13/ee8b13ed52118d9568a258841419afbd.jpg"
//     const heroImage = props.img

//     const handleCloseQuiz = () => {
//         setIsOpen(false);
//     };

//     const openQuiz = () => {
//         setIsOpen(!isOpen);
//     }

//     return (
//         <div className="hero">
//             <div className="hero-content">
//                 <div className="hero-text">
//                     <h1>{title}</h1>
//                     <p>{description}</p>
//                     <button className='button' onClick={openQuiz}>Take Quiz</button>
//                     {isOpen ? <Quiz onClose={handleCloseQuiz} /> : <div></div>}
//                 </div>
//                 <div className="hero-image">
//                     <img height={450} width={450} src={heroImage} alt="Hero" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HomeHero;

import React, { useState } from 'react';
import './Hero.css';
import Quiz from './Quiz';
// import heroImage from '../assets/meditation.jpeg';

const HomeHero = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, description, img } = props;
    const [userDetails, setUserDetails] = useState();

    const handleCloseQuiz = () => {
        setIsOpen(false);
    };

    const openQuiz = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button className='button' onClick={openQuiz}>Take Quiz</button>
                    {isOpen ? <Quiz onClose={handleCloseQuiz} userDetails={userDetails} setUserDetails={setUserDetails} /> : null}
                </div>
                <div className="hero-image">
                    <img height={450} width={450} src={img} alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default HomeHero;
