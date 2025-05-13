import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed z-50 w-full transition-all duration-500 ${
                scrolled
                    ? "bg-amber-900/90 shadow-lg backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            {/* Animated Border - Flow Up */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                <div
                    className={`absolute bottom-0 left-0 right-0 h-full bg-amber-400 transition-all duration-500 ease-out ${
                        scrolled ? "translate-y-0" : "translate-y-full"
                    }`}
                ></div>
            </div>

            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white">
                        <span className="text-amber-200">Dmitrie</span>Coffee
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-6 md:flex">
                        <a
                            href="#"
                            className="group relative font-medium text-amber-100 transition-colors duration-300 hover:text-white"
                        >
                            <span>Home</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative text-amber-100 transition-colors duration-300 hover:text-white"
                        >
                            <span>Our Story</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative text-amber-100 transition-colors duration-300 hover:text-white"
                        >
                            <span>Menu</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative text-amber-100 transition-colors duration-300 hover:text-white"
                        >
                            <span>Locations</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a
                            href="#"
                            className="group relative text-amber-100 transition-colors duration-300 hover:text-white"
                        >
                            <span>Contact</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <button className="ml-4 rounded-lg bg-amber-700 px-4 py-2 text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-800/30">
                            Order Online
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-amber-100 transition-all duration-300 hover:rotate-90 focus:outline-none md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-4 space-y-3 pb-4 md:hidden">
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-amber-100 transition-colors duration-300 hover:bg-amber-800/50 hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-amber-100 transition-colors duration-300 hover:bg-amber-800/50 hover:text-white"
                        >
                            Our Story
                        </a>
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-amber-100 transition-colors duration-300 hover:bg-amber-800/50 hover:text-white"
                        >
                            Menu
                        </a>
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-amber-100 transition-colors duration-300 hover:bg-amber-800/50 hover:text-white"
                        >
                            Locations
                        </a>
                        <a
                            href="#"
                            className="block rounded px-3 py-2 text-amber-100 transition-colors duration-300 hover:bg-amber-800/50 hover:text-white"
                        >
                            Contact
                        </a>
                        <button className="mt-2 w-full rounded-lg bg-amber-700 px-4 py-2 text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-800/30">
                            Order Online
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
