import React from 'react';
import Navbar from './Navbar';

const OurStory = () => {
    return (
        <>
            <Navbar />
            <main className="flex-grow">
                <section id="our-story" className="py-16 bg-amber-50 fade-in-section">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Story</h2>
                        
                        <div className="max-w-4xl mx-auto">
                            {/* Timeline */}
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-1/2 w-1 h-full bg-amber-200 transform -translate-x-1/2"></div>
                                
                                {/* Timeline items */}
                                <div className="space-y-12">
                                    {/* Item 1 */}
                                    <div className="relative flex items-center">
                                        <div className="flex-shrink-0 w-1/2 pr-8 text-right">
                                            <h3 className="text-xl font-semibold text-amber-800">2010</h3>
                                            <p className="text-amber-700">Humble Beginnings</p>
                                        </div>
                                        <div className="absolute left-1/2 w-6 h-6 bg-amber-600 rounded-full transform -translate-x-1/2 border-4 border-amber-100"></div>
                                        <div className="flex-shrink-0 w-1/2 pl-8">
                                            <p className="text-amber-900">
                                                Dmitrie started as a small coffee cart in Jakarta, serving hand-brewed coffee to early morning commuters.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Rest of your timeline items... */}
                                </div>
                            </div>
                            
                            {/* Team Section */}
                            <div className="mt-16">
                                <h3 className="text-2xl font-semibold text-center text-amber-800 mb-8">Meet Our Founders</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {/* Team members... */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Add your Footer component here if you have one */}
        </>
    );
};

export default OurStory;