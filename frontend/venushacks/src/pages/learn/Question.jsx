import './Question.css'
import React from 'react'

const Question = ({ handleSubmit, question, options, answer}) => {

    return ( 
        <div>
            <h2>{question}</h2>

            <div>
                <div>
                    <button onClick={() => handleSubmit(0)}>{options[0]}</button>
                    <button onClick={() => handleSubmit(1)}>{options[1]}</button>
                </div>

                <div>
                    <button onClick={() => handleSubmit(2)}>{options[2]}</button>
                    <button onClick={() => handleSubmit(3)}>{options[3]}</button>
                </div>
            </div>
        </div>
    );
}
 
export default Question;