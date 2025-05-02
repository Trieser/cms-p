import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-900/90 backdrop-blur-md fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-amber-200">Dmitrie</span>Coffee
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-6 md:flex items-center">
            <a href="#" className="text-amber-100 hover:text-white font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              Our Story
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              Menu
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              Locations
            </a>
            <a href="#" className="text-amber-100 hover:text-white transition-colors">
              Contact
            </a>
            <button className="ml-4 bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-amber-100 focus:outline-none"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#" className="block text-amber-100 hover:text-white px-3 py-2 rounded hover:bg-amber-800/50">
              Home
            </a>
            <a href="#" className="block text-amber-100 hover:text-white px-3 py-2 rounded hover:bg-amber-800/50">
              Our Story
            </a>
            <a href="#" className="block text-amber-100 hover:text-white px-3 py-2 rounded hover:bg-amber-800/50">
              Menu
            </a>
            <a href="#" className="block text-amber-100 hover:text-white px-3 py-2 rounded hover:bg-amber-800/50">
              Locations
            </a>
            <a href="#" className="block text-amber-100 hover:text-white px-3 py-2 rounded hover:bg-amber-800/50">
              Contact
            </a>
            <button className="w-full mt-2 bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors">
              Order Online
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;