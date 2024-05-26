import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";

const Module = ({planet, setTopic, topic, setParagraphs, setQuestions}) => {
    const apikey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apikey);

    const generateTopic = async (questions) => {
        console.log("running");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                response_mime_type: "application/json"
            }
        });

        setTopic('minerals')

        const prompt = `Write 3 paragraphs on the topic of minerals in the context of ${planet}. Base them off these quiz questions: ${questions} Use a high school reading level and ecstatic wording. Include metrics within each paragraph.`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        
        // Parse the JSON response
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(text);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return;
        }

        if (parsedResponse.paragraphs && Array.isArray(parsedResponse.paragraphs)) {
            const splicedText = parsedResponse.paragraphs.join('\n\n');
            setParagraphs(parsedResponse.paragraphs); // Set the article to the paragraphs array
            console.log('Spliced Text:', splicedText);
        } else {
            console.error('Invalid JSON format');
        }
    };

    const generateQuestions = async () => {
        console.log("running");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                response_mime_type: "application/json"
            }
        });

        const prompt = `In JSON format, Generate 5 elementary questions corresponding to ${topic} in the context of ${planet}. Each question has 4 answers and 1 zero-index of the correct answer. Write the response as a json format. Make sure the json is valid. Example: [{"question":"What is the largest planet in our Solar System?","options":["Earth","Jupiter","Mars","Venus"],"answer": 1}]`;
        console.log(prompt);
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        console.log(text);
        const questions = JSON.parse(text);

        setQuestions(questions);
        console.log('Gemini: ', questions);

        generateTopic(questions)
    };


    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    };

  // Function to handle planet selection (replace with your actual logic)
  const handlePlanetSelection = (planetName) => {
    setSelectedPlanet(planetName);
  };

  return (
    <div>
      <div className='module-block'>
        <Link to='/learn'>
          <img src="learn.png" alt="Learn icon" />
          {/* <p>Learn</p> */}
        </Link>
        <div>
            <div className='module-screen'>
                <div className='module-block'>
                    <Link to='/learn'>
                        <img src="image1.jpg" alt="Learn icon" />
                        <p>Learn</p>
                    </Link>
                    <div>
                        <img src="image2.jpg" alt={planet} />
                    </div>
                    <Link to='/quiz'>
                        <img src="image3.jpg" alt="Quiz icon" />
                        <p>Quiz</p>
                    </Link>
                </div>

                <label>AI Topic ✨</label>
                <input type='text' onChange={handleTopicChange} style={{ width: '200px', height: '30px' }}></input>
                <button onClick={generateQuestions} style={{ width: '100px', height: '30px' }}>Generate</button>
            </div>
        </div>
        <Link to='/quiz'>
          <img src="test.png" alt="Quiz icon" />
          {/* <p>Quiz</p> */}
        </Link>
      </div>

      {/* Add your planet selection logic here (replace with your implementation) */}
      <div>
        <h2>Choose a Planet:</h2>
        <button onClick={() => handlePlanetSelection('Earth')}>Earth</button>
        <button onClick={() => handlePlanetSelection('Mars')}>Mars</button>
        {/* Add buttons for other planets */}
      </div>
    </div>
  );
};

export default Module;
