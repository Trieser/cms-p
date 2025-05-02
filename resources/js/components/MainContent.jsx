import Hero from './Hero';
import React from 'react';
import { useState } from 'react';

const MainContent = () => {
    return (
        <main className="flex-grow">
            <Hero />
            
            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Coffee Journey</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img 
                                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                                alt="Coffee plantation" 
                                className="rounded-lg shadow-xl transform transition hover:scale-105 duration-500" 
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Bean to Cup</h3>
                            <p className="text-gray-600 mb-4">
                                We directly partner with local farmers in Sumatra, Java, and Bali to bring you the freshest single-origin beans.
                            </p>
                            <p className="text-gray-600">
                                Each batch is hand-roasted in small quantities to ensure perfect flavor development and consistency.
                            </p>
                            <button className="mt-6 text-amber-700 font-medium hover:text-amber-800 transition flex items-center">
                                Learn about our process
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;