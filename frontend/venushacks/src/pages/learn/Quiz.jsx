import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Module = () => {
    const apikey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apikey);


    const [currIndex, setCurrIndex] = useState(0)
    const navigate = useNavigate()

    const [AIQuestions, setAIQuestions] = useState([])

    useEffect(() => {
        generateAI('Jupiter');
    }, []);

    const generateAI = async (topic) => {
        console.log("running");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                response_mime_type: "application/json"
            }
        });

        const prompt = `In JSON format, Generate 5 important questions corresponding to ${topic}. Each question has 4 answers and 1 zero-index of the correct answer. Write the response as a json format. Make sure the json is valid. Example: [{"question":"What is the largest planet in our Solar System?","options":["Earth","Jupiter","Mars","Venus"],"answer": 1}]`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text(); 
        console.log(text);
        const questions = JSON.parse(text);

        setAIQuestions(questions);
        console.log('Gemini: ', questions);
    };


    const questions = [
        {
            question: 'What is the gravity of Mars?',
            options: ['3.711 m/s²', '9.81 m/s²', '5.972 × 10^24 kg', '6.39 × 10^23 kg'],
            answer: 0
        },
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            answer: 2
        },
        // Add more AIQuestions as needed
    ];

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
        <div>
            <h1>Module 1: Mars</h1>

            {/* map out AIQuestions */}
            {currIndex < AIQuestions.length &&
                <Question
                    handleSubmit={handleSubmit}
                    question={AIQuestions[currIndex].question}
                    options={AIQuestions[currIndex].options}
                    answer={AIQuestions[currIndex].answer}
                />
            }
        </div>
    );
}

export default Module;