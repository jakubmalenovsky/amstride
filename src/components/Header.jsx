import React from "react";
import { Link } from "react-router-dom";
import { Home, MapPin, Calendar, Plane } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-white/90 backdrop-blur-xl shadow-2xl border-b border-blue-100 sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link 
                        to="" 
                        className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 flex items-center gap-2"
                    >
                        <Plane className="w-6 h-6 text-blue-600" />
                        Amstride
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex justify-center items-center space-x-6 xl:space-x-10">
                    <li>
                        <Link 
                            to="" 
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-base xl:text-lg group"
                        >
                            <Home className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="zero" 
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-base xl:text-lg group"
                        >
                            <MapPin className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                            Trip Visits
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="first" 
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-base xl:text-lg group"
                        >
                            <Calendar className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                            Trip Week
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="second" 
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold text-base xl:text-lg group"
                        >
                            <Plane className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                            Amsterdam?
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}