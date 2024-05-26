import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';

const Quiz = ({ user, planet, topic }) => {
    const apikey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apikey);

    const [isCorrect, setIsCorrect] = useState(null);
    const [answerSubmitted, setAnswerSubmitted] = useState(false)
    const [currIndex, setCurrIndex] = useState(0)
    const navigate = useNavigate()

    const [AIQuestions, setAIQuestions] = useState([])

    useEffect(() => {
        generateAI();
    }, []);

    const generateAI = async () => {
        console.log("running");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                response_mime_type: "application/json"
            }
        });

        const prompt = `In JSON format, Generate 5 important questions corresponding to ${topic} in the context of ${planet}. Each question has 4 answers and 1 zero-index of the correct answer. Write the response as a json format. Make sure the json is valid. Example: [{"question":"What is the largest planet in our Solar System?","options":["Earth","Jupiter","Mars","Venus"],"answer": 1}]`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        const questions = JSON.parse(text);

        setAIQuestions(questions);
        console.log('Gemini: ', questions);
    };

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
        const currentQuestion = AIQuestions[currIndex];
        const correct = index === currentQuestion.answer;
        setIsCorrect(correct);
        setAnswerSubmitted(true);

        if (correct) {
            await incrementProgress(); // Call incrementProgress if the answer is correct
        }
    };

    const handleNextQuestion = () => {
        const nextIndex = currIndex + 1;

        if (nextIndex < AIQuestions.length) {
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

            {AIQuestions.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Generating questions...</p>
            ) : (
                currIndex < AIQuestions.length && (
                    <>
                        <Question
                            handleSubmit={handleSubmit}
                            question={AIQuestions[currIndex].question}
                            options={AIQuestions[currIndex].options}
                            answer={AIQuestions[currIndex].answer}
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
            )}
        </div>
    );
}

export default Quiz;