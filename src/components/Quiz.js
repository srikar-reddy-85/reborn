import React, { useState, useEffect } from 'react';
import { quiz1 } from './quiz1';
import './Quiz.css';
import supabase from '../config/superbaseClient';

const Quiz = ({ onClose, userDetails, setUserDetails }) => {
    // State variables for component management
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState(
        new Array(quiz1.questions.length).fill(null)
    );
    const [questionTypes, setQuestionTypes] = useState([]); // Store question types

    const { questions } = quiz1; // Destructure questions from quiz1
    const { question, choices, type } = questions[activeQuestion]; // Destructure current question details

    // Effect to store question types
    useEffect(() => {
        const types = quiz1.questions.map((q) => q.type);
        setQuestionTypes(types);
    }, []);

    // Function to handle answer selection
    const handleAnswerChange = (answerIndex) => {
        setSelectedAnswerIndex(answerIndex);
        const newAnswers = [...userAnswers];
        newAnswers[activeQuestion] = answerIndex;
        setUserAnswers(newAnswers);
    };

    // Function to handle next question or submission
    const onNextQuestion = () => {
        // Ensure answer is stored before moving on
        handleAnswerChange(selectedAnswerIndex);

        if (activeQuestion === questions.length - 1) {
            // Show result if last question
            setShowResult(true);

            // Save quiz data (userDetails and answers) here, e.g., using an API or localStorage
            console.log('Quiz Data:', { userDetails, userAnswers });
        } else {
            // Move to next question
            setActiveQuestion((prev) => prev + 1);
            setSelectedAnswerIndex(null); // Reset answer selection
        }
    };

    // Function to handle quiz submission
    const onSubmit = () => {
        if (activeQuestion === questions.length - 1) {
            // Handle final submission logic, e.g., send data to server
            onClose();
            console.log('Quiz submitted! Data:', { userDetails, userAnswers });
            if (showResult) {
                // Prepare data to insert into Supabase table
                const dataToInsert = {
                    name: userDetails[0],
                    age: userDetails[1],
                    email: userDetails[2],
                    ...userAnswers.reduce((acc, answer, index) => {
                        // Assuming each userAnswer corresponds to a question
                        acc[`question${index + 1}`] = answer;
                        return acc;
                    }, {})
                };

                // Insert data into Supabase table
                supabase.from('quizresponses').insert([dataToInsert])
                    .then(response => {
                        console.log('Data inserted into Supabase:', response);
                    })
                    .catch(error => {
                        console.error('Error inserting data into Supabase:', error.message);
                    });
            }
        } else {
            alert('Please complete all questions before submitting.');
        }
    };

    // Function to handle exit click
    const onExit = () => {
        onClose(); // Call the onClose function passed from HomeHero
    };


    useEffect(() => {
        if (showResult) {
            // Prepare data to insert into Supabase table
            const dataToInsert = {
                name: userDetails[0],
                age: userDetails[1],
                email: userDetails[2],
                ...userAnswers.reduce((acc, answer, index) => {
                    // Assuming each userAnswer corresponds to a question
                    acc[`question${index + 1}`] = answer;
                    return acc;
                }, {})
            };

            // Insert data into Supabase table
            supabase.from('QuizResponses').insert([dataToInsert])
                .then(response => {
                    console.log('Data inserted into Supabase:', response);
                })
                .catch(error => {
                    console.error('Error inserting data into Supabase:', error.message);
                });
        }
    }, [showResult, userDetails, userAnswers]);

    // Function to render question content based on type
    const renderQuestionContent = () => {
        switch (type) {
            case 'MCQs':
                return (
                    <ul style={{ display: 'flex', justifyContent: 'center' }}>
                        {choices.map((answer, index) => (
                            <li
                                key={answer}
                                style={{
                                    margin: 6,
                                    fontSize: 20,
                                    color: 'black',
                                    width: 'fit-content',
                                    padding: '5px',
                                    margin: '10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedAnswerIndex === index ? '#ffed22' : '#ffffff',
                                }}
                                onClick={() => handleAnswerChange(index)}
                                className={selectedAnswerIndex === index ? 'selected-answer' : null}
                            >
                                {answer}
                            </li>
                        ))}
                    </ul>
                );
            case 'text':
                return (
                    <input
                        type="text"
                        value={userDetails ? userDetails[activeQuestion] || '' : ''} // Pre-fill answer if available
                        onChange={(e) => {
                            const newDetails = { ...userDetails };
                            newDetails[activeQuestion] = e.target.value;
                            setUserDetails(newDetails);
                        }}
                    />
                );
            default:
                return <p>Unsupported question type: {type}</p>;
        }
    };

    return (
        <div className="story-dialog">
            <div style={{ color: 'white' }} className="dialog-content">
                {!showResult ? (
                    <div>
                        <div>
                            <span className="active-question-no">{activeQuestion + 1}</span>
                            <span className="total-question">/{questions.length}</span>
                        </div>
                        <h2 className="quiz-question">{question}</h2>
                        {renderQuestionContent()}
                        <div style={{ display: "flex", justifyContent: "space-between" }} className="button-container">
                            <button className="button" onClick={onExit}>
                                Exit
                            </button>
                            <button className="button" onClick={onNextQuestion}>
                                {activeQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                            </button>

                        </div>
                    </div>
                ) : (
                    <div>
                        <h2>Quiz Result</h2>
                        <p>You have completed the quiz!</p>
                        <button className="button" onClick={onSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
