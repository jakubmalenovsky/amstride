import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, MapPin, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-12">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <MapPin className="text-blue-600 w-8 h-8" />
                        <span className="text-xl font-medium text-gray-700">Amstride</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                        Your Amsterdam Trip <br /> Decision Companion
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        Discover whether your dream Amsterdam adventure is within reach. 
                        Amstride helps you navigate the financial possibilities of your trip 
                        with an interactive, intelligent decision flow. With us, you can
                        explore your options and make informed choices.
                    </p>
                    
                    <Link 
                        to="/second"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl 
                        hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Start Your Journey <Plane className="w-6 h-6" /> <ArrowRight />
                    </Link>
                </div>

                {/* Image/Illustration Section */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <img 
                            src="https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Amsterdam Trip" 
                            className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-lg rounded-xl p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-blue-600 w-6 h-6" />
                                <span className="text-gray-800 font-semibold">Amsterdam Awaits!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white/60 backdrop-blur-xl py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">Why Amstride?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                            <MapPin className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Smart Decision Flow</h3>
                            <p className="text-gray-600">Intelligent algorithm to assess your trip feasibility</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                            <Plane className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Trip Planning</h3>
                            <p className="text-gray-600">Comprehensive guidance for your Amsterdam adventure</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                            <ArrowRight className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Easy Navigation</h3>
                            <p className="text-gray-600">Simple, interactive journey through trip possibilities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}