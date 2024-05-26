import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useLocation } from "react-router";

const Learn = ({planet, topic}) => {
    const [article, setArticle] = useState([]);
    const apikey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apikey);

    useEffect(() => {
        console.log(planet, topic)

        if (planet && topic) {
            generateAI();
        }
        
    }, [planet, topic]);

    const generateAI = async () => {
        console.log("running");
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                response_mime_type: "application/json"
            }
        });

        const prompt = `Write 3 paragraphs on the topic of ${topic} in the context of ${planet}. Use a high school reading level and ecstatic wording. Include metrics within each paragraph.`;
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
            setArticle(parsedResponse.paragraphs); // Set the article to the paragraphs array
            console.log('Spliced Text:', splicedText);
        } else {
            console.error('Invalid JSON format');
        }
    };

    return (
        <div>
            <h1>Learn: {topic}</h1>
            {Array.isArray(article) && article.map((para, index) => (
                <div>
                    <p key={index}>{para}</p><br/>
                </div>
            ))}
        </div>
    );
}

export default Learn;
