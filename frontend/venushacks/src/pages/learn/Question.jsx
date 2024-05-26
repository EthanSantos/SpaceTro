import './Question.css'
import React from 'react'

const Question = ({ handleSubmit, question, options, answer }) => {

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">{question}</h2>

            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => handleSubmit(0)}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                        {options[0]}
                    </button>
                    <button
                        onClick={() => handleSubmit(1)}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                        {options[1]}
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => handleSubmit(2)}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                        {options[2]}
                    </button>
                    <button
                        onClick={() => handleSubmit(3)}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
                    >
                        {options[3]}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Question;