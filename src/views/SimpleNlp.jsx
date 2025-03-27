import React, { useState } from 'react';

export default function SimpleNLP() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState("No result, yet");
    const [showList, setShowList] = useState(false);

    const museumsList = ['The Hague University', 'The Lookout Tower', 'This is Holland', 'Fabriques de Lumiere', 'Stedelijk Museum', 'MOCO', 'Rijksmuseum', 'Mikropia', 'Grote Museum'];

    const handleSubmit = (event) => {
        event.preventDefault();
        const { likelihood, matchedMuseums } = analyzeMuseums(input);
        setShowList(true);

        if (matchedMuseums.length > 0) {
            setResult(`Great choices! You will be able to visit ${matchedMuseums.join(', ')} during the Amsterdam trip. And that represents only ${likelihood}% of the activities you will partake in during the trip.`);
        } else {
            setResult("No matching attractions found. Try mentioning some places from Amsterdam!");
        }
    };

    const analyzeMuseums = (input) => {
        let matchCount = 0;
        let matchedMuseums = [];

        museumsList.forEach(museum => {
            if (input.toLowerCase().includes(museum.toLowerCase())) {
                matchCount++;
                matchedMuseums.push(museum);
            }
        });

        const likelihood = ((matchCount / museumsList.length) * 100).toFixed(2);
        return { likelihood, matchedMuseums };
    };

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center mb-4">What will you visit in Amsterdam?</h1>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="museums" className="block text-gray-700">
                        What would you like to visit during your trip?
                    </label>
                    <textarea 
                        id="museums"
                        name="museums"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        placeholder="Write the names here..."
                        className="w-full h-40 p-2 border rounded"
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Find out
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p>{result}</p>
                </div>

                {showList && (
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold text-center mb-4">
                            Here is a list of all the places you are going to visit:
                        </h2>
                        <ul className="list-none text-center">
                            {museumsList.map((museum, index) => (
                                <li key={index} className="py-1">{museum}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}