// Navbar.tsx
import React, { useState } from "react";
import {Link} from "react-router-dom";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-950 shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold  text-indigo-600 ">
                        <a href="/">DILSHA</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 gap-x-4 text-gray-500 font-medium">
                        <Link to="/" className="hover:text-indigo-600 transition">HOME</Link>
                        <Link to="/projects" className="hover:text-indigo-600 transition">PROJECTS</Link>
                        <Link to="" className="hover:text-indigo-600 transition">CONTACT</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">HOME</a>
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">PROJECTS</a>
                    <a href="#" className="block text-gray-700 hover:text-indigo-600">CONTACT</a>
                </div>
            )}
        </nav>
    );
};
