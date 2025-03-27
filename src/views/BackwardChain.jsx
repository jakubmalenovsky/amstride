import React, { useState } from 'react';
import { MapPin, CheckCircle2, XCircle } from 'lucide-react';

export default function BackwardChain() {
  const [facts, setFacts] = useState({
    lots_of_money: null,
    more_money: null,
  });

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

  const askQuestion = (fact, label, pretext) => {
    return (
      <QuestionCard 
        question={`${pretext} Do you have ${label}?`}
        onYes={() => setFacts(prev => ({ ...prev, [fact]: "Yes" }))}
        onNo={() => setFacts(prev => ({ ...prev, [fact]: "No" }))}
      />
    );
  };

  const backwardChain = () => {
    if (facts.lots_of_money === null) {
      return askQuestion("lots_of_money", "3500 DKK", " ");
    }
    
    if (facts.lots_of_money === "No") {
      return (
        <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
          <div className="text-amber-600">
            <XCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">I am sorry! :c You cannot go on the trip.</h2>
          </div>
        </div>
      );
    }
    
    if (facts.more_money === null) {
      return askQuestion("more_money", "1000 DKK more", "Cool! You are in but... ");
    }
    
    if (facts.more_money === "No") {
      return (
        <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
          <div className="text-amber-600">
            <XCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">You are going to walk, buddy... a lot... also, learn how to hunt!</h2>
          </div>
        </div>
      );
    }
    
    return (
      <div className="animate-fade-in bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center max-w-md mx-auto space-y-6">
        <div className="text-emerald-600">
          <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
          <p className="text-gray-700 text-lg">You are going to have an amazing trip to Amsterdam!</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <MapPin className="text-blue-600 w-10 h-10" /> Are you going on the Amsterdam trip?
          </h1>
        </header>

        {backwardChain()}
      </div>
    </div>
  );
}