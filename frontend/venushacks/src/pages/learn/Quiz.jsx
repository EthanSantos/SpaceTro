import './Module.css'
import React, { useState } from 'react'
import Question from './Question';
import { useNavigate } from 'react-router';

const Module = () => {

    const [currIndex, setCurrIndex] = useState(0)
    const navigate = useNavigate()

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
        // Add more questions as needed
    ];

    const handleSubmit = (index) => {
        const currentQuestion = questions[currIndex];
        const isCorrect = index === currentQuestion.answer;
        
        const nextIndex = currIndex + 1;

        if (nextIndex < questions.length) {
            setCurrIndex(nextIndex);
        } else {
            console.log('module finished');
            navigate('/learn');
        }
    };


    return ( 
        <div>
            <h1>Module 1: Mars</h1>

            {/* map out questions */}
            { currIndex < questions.length &&
                <Question
                    handleSubmit={handleSubmit}
                    question={questions[currIndex].question}
                    options={questions[currIndex].options}
                    answer={questions[currIndex].answer}
                />
            }
        </div>
    );
}
 
export default Module;