import Hero from './Hero';
import React, { useEffect } from 'react';

const MainContent = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('.fade-in-section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <main className="flex-grow">
            <Hero />

            {/* About Section */}
            <section className="py-16 bg-white fade-in-section">
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

            {/* Featured Products Section */}
            <section className="py-16 bg-gray-50 fade-in-section">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                                alt="Espresso" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Espresso Blend</h3>
                                <p className="text-gray-600 mt-2">A bold and rich blend perfect for your morning espresso.</p>
                                <button className="mt-4 text-amber-700 font-medium hover:text-amber-800 transition flex items-center">
                                    View Details
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                                alt="Latte" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Latte Art</h3>
                                <p className="text-gray-600 mt-2">Enjoy the perfect latte with beautiful latte art designs.</p>
                                <button className="mt-4 text-amber-700 font-medium hover:text-amber-800 transition flex items-center">
                                    View Details
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 duration-500">
                            <img 
                                src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80" 
                                alt="Cold Brew" 
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Cold Brew</h3>
                                <p className="text-gray-600 mt-2">A refreshing cold brew perfect for hot summer days.</p>
                                <button className="mt-4 text-amber-700 font-medium hover:text-amber-800 transition flex items-center">
                                    View Details
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;