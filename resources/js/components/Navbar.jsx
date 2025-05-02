const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className=" mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800">
                        Testing<span className="text-blue-600">Name</span>
                    </div>
                    <div className="hidden space-x-8 md:flex">
                        <a href="#" className="font-medium text-blue-600">
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-blue-600"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition hover:text-blue-600"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition hover:text-blue-600"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 transition hover:text-blue-600"
                        >
                            Contact
                        </a>
                        <button className=" focus:outline-none">
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
