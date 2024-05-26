import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';

const Quiz = ({ user, planet, topic, questions }) => {
    const apikey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apikey);

    const [isCorrect, setIsCorrect] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false)
    const [currIndex, setCurrIndex] = useState(0)
    const navigate = useNavigate()

    const [AIQuestions, setAIQuestions] = useState([])

    useEffect(() => {
        // generateAI();
    }, []);

    const incrementProgress = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/points', null, {
                params: { user_id: user.id },
            });
            
            console.log(response.data);
        } catch (error) {
            console.error('Error incrementing progress:', error.response?.data || error.message);
        }
    };

    const handleSubmit = async (index) => {
        const currentQuestion = questions[currIndex];
        const correct = index === currentQuestion.answer;
        setIsCorrect(correct);
        setAnswerSubmitted(true);

        if (correct) {
            await incrementProgress(); // Call incrementProgress if the answer is correct
        }
    };

    const handleNextQuestion = () => {
        const nextIndex = currIndex + 1;

        if (nextIndex < questions.length) {
            setCurrIndex(nextIndex);
            setIsCorrect(null); // Reset the correctness state for the next question
            setAnswerSubmitted(false); // Reset the answer submitted state for the next question
        } else {
            console.log('module finished');
            navigate('/module');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Module 1: {planet} - {topic}</h1>

            {currIndex < questions.length && (
                    <>
                        <Question
                            handleSubmit={handleSubmit}
                            question={questions[currIndex].question}
                            options={questions[currIndex].options}
                            answer={questions[currIndex].answer}
                            answerSubmitted={answerSubmitted}
                        />
                        {isCorrect !== null && (
                            <p className={`text-center text-xl mt-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                {isCorrect ? 'Correct!' : 'Wrong!'}
                            </p>
                        )}
                        {answerSubmitted && (
                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={handleNextQuestion}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                    Next Question
                                </button>
                            </div>
                        )}
                    </>
                )
            }
        </div>
    );
}

export default Quiz;