import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { OpenAI} from 'openai'
import { GoogleGenerativeAI } from "@google/generative-ai";

const Module = () => {
    const apikey = import.meta.env.VITE_GEMINI_APIKEY
    const genAI = new GoogleGenerativeAI(apikey);


    const [currIndex, setCurrIndex] = useState(0)
    const navigate = useNavigate()

    const [AIQuestions, setAIQuestions] = useState([])

    useEffect(() => {
        generateAI('Earth');
    }, []);

    async function generateAI(topic) {
        // For text-only input, use the gemini-pro model
        console.log("running")
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
        const prompt = ``;
        console.log(prompt)
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const questions = JSON.parse(text)
        const filterSlash = questions.replace('\n', '')
        const filterN = filterSlash.replace('\\', '')

        console.log('Questions: ', filterN)

        setAIQuestions(questions)

        console.log('Gemini: ', AIQuestions)
    }
    

    // const questions = [
    //     {
    //         question: 'What is the gravity of Mars?',
    //         options: ['3.711 m/s²', '9.81 m/s²', '5.972 × 10^24 kg', '6.39 × 10^23 kg'],
    //         answer: 0
    //     },
    //     {
    //         question: 'What is the capital of France?',
    //         options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    //         answer: 2
    //     },
    //     // Add more AIQuestions as needed
    // ];

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
            { currIndex < AIQuestions.length &&
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