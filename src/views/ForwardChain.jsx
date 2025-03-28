import React, { useState } from "react";
import { MapPin, RefreshCw, Globe, Plane, CheckCircle2, XCircle } from "lucide-react";
import RecommendationPage from "./RecommendationPage";

export default function ForwardChain() {
  // State for decision-making
  const [facts, setFacts] = useState({
    trip_to_amsterdam: null,
    has_3500_dkk: null,
    has_1000_dkk_more: null,
    has_1000_dkk: null,
  });

  const [showRecommendation, setShowRecommendation] = useState(false);

  // Reset function
  const resetFlow = () => {
    setFacts({
      trip_to_amsterdam: null,
      has_3500_dkk: null,
      has_1000_dkk_more: null,
      has_1000_dkk: null,
    });
    setShowRecommendation(false);
  };

  // List of museums
  const museums = [
    "Stedelijk Museum - Modern & Contemporary Art",
    "MOCO Museum - Modern & Street Art",
    "Rijksmuseum - Dutch Golden Age Paintings",
    "Micropia - Microbiology Museum",
    "Grote Museum - Human & Nature Connection",
    "Fabrique des Lumières - Digital Art Experience",
  ];

  // Question Component
  const QuestionCard = ({ question, onYes, onNo }) => (
    <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">{question}</h2>
      <div className="flex justify-center space-x-4">
        <button 
          onClick={onYes}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all transform hover:scale-105"
        >
          <CheckCircle2 className="w-5 h-5" /> Yes
        </button>
        <button 
          onClick={onNo}
          className="flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-xl hover:bg-rose-600 transition-all transform hover:scale-105"
        >
          <XCircle className="w-5 h-5" /> No
        </button>
      </div>
    </div>
  );

  // Forward chaining logic
  const forwardChain = () => {
    if (facts.trip_to_amsterdam === null) {
      return (
        <QuestionCard 
          question="Do you want to go for a trip to Amsterdam?"
          onYes={() => setFacts({ ...facts, trip_to_amsterdam: "Yes" })}
          onNo={() => setFacts({ ...facts, trip_to_amsterdam: "No" })}
        />
      );
    }

    if (facts.trip_to_amsterdam === "Yes") {
      if (facts.has_3500_dkk === null) {
        return (
          <QuestionCard 
            question="Do you have 3500 DKK?"
            onYes={() => setFacts({ ...facts, has_3500_dkk: "Yes" })}
            onNo={() => setFacts({ ...facts, has_3500_dkk: "No" })}
          />
        );
      }

      if (facts.has_3500_dkk === "Yes") {
        if (facts.has_1000_dkk_more === null) {
          return (
            <QuestionCard 
              question="AAA! It is without food and transport. Do you have 1000 DKK more?"
              onYes={() => setFacts({ ...facts, has_1000_dkk_more: "Yes" })}
              onNo={() => setFacts({ ...facts, has_1000_dkk_more: "No" })}
            />
          );
        }

        return facts.has_1000_dkk_more === "Yes" ? (
          <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
            <div className="text-emerald-600">
              <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">You are IN!</h2>
            </div>
            <p className="text-gray-700 text-lg">List of museums that you will visit:</p>
            <ul className="text-gray-700 text-left list-disc pl-6">
              {museums.map((museum, index) => (
                <li key={index}>{museum}</li>
              ))}
            </ul>
          </div>
        ) : (
          <>{setShowRecommendation(true)}</>
        );
      }
    }

    if (facts.has_1000_dkk === null) {
      return (
        <QuestionCard 
          question="Do you have 1000 DKK?"
          onYes={() => setFacts({ ...facts, has_1000_dkk: "Yes" })}
          onNo={() => setFacts({ ...facts, has_1000_dkk: "No" })}
        />
      );
    }

    if (facts.has_1000_dkk === "Yes") {
      setShowRecommendation(true);
    }

    return (
      <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
        <div className="text-amber-600">
          <XCircle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">I am sorry, You need to get this money.</h2>
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => window.open("https://www.jobindex.dk", "_blank")}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            <Globe className="w-5 h-5" /> Find a Job
          </button>
          <button 
            onClick={() => setShowRecommendation(true)}
            className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-all transform hover:scale-105"
          >
            Next <Plane className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <MapPin className="text-blue-600 w-10 h-10" /> Trip Decision Flow
          </h1>
          <p className="text-gray-600 text-lg">Your gateway to an Amsterdam adventure</p>
        </header>

        {showRecommendation ? <RecommendationPage /> : forwardChain()}

        <div className="mt-8 flex justify-center">
          <button 
            onClick={resetFlow}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all transform hover:scale-105"
          >
            <RefreshCw className="mr-2 w-5 h-5" /> Start Over
          </button>
        </div>
      </div>
    </div>
  );
}
