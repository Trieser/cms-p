// components/MainContent.jsx
const MainContent = () => {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Company</h1>
                    <p className="text-xl mb-8">We provide innovative solutions for your business needs</p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                        Learn More
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Us</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="https://via.placeholder.com/500x300" alt="About Us" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <p className="text-gray-600">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;