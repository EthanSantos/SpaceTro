import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Quiz = ({planet}) => {
    const apikey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apikey);


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

        const prompt = `In JSON format, Generate 5 important questions corresponding to ${planet}. Each question has 4 answers and 1 zero-index of the correct answer. Write the response as a json format. Make sure the json is valid. Example: [{"question":"What is the largest planet in our Solar System?","options":["Earth","Jupiter","Mars","Venus"],"answer": 1}]`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        const questions = JSON.parse(text);

        setAIQuestions(questions);
        console.log('Gemini: ', questions);
    };

    const handleSubmit = (index) => {
        const currentQuestion = AIQuestions[currIndex];
        const isCorrect = index === currentQuestion.answer;

        const nextIndex = currIndex + 1;

        if (nextIndex < AIQuestions.length) {
            setCurrIndex(nextIndex);
        } else {
            console.log('module finished');
            navigate('/module');
        }
    };


    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Module 1: {planet}</h1>

            {AIQuestions.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">Generating questions...</p>
            ) : (
                currIndex < AIQuestions.length && (
                    <Question
                        handleSubmit={handleSubmit}
                        question={AIQuestions[currIndex].question}
                        options={AIQuestions[currIndex].options}
                        answer={AIQuestions[currIndex].answer}
                    />
                )
            )}
        </div>
    );
}

export default Quiz;