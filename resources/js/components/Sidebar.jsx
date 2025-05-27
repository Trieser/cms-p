// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => (
    <aside
        className={`fixed inset-y-0 left-0 z-30 transform bg-gray-800 text-white transition-all duration-300 ease-in-out ${
            isOpen ? "w-64" : "w-16"
        } md:translate-x-0`}
    >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-center border-b border-gray-700">
            {isOpen ? (
                <h1 className="text-xl font-bold">CMS-Nexplorer</h1>
            ) : (
                <h1 className="text-xl font-bold">CN</h1>
            )}
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-5">
            <ul>
                <li>
                    <Link
                        to="/"
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                        </svg>
                        {isOpen && <span className="ml-3">Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/inquiries"
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            ></path>
                        </svg>
                        {isOpen && <span className="ml-3">Inquiries</span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/t-inquiries"
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                        </svg>
                        {isOpen && <span className="ml-3">T-Inquiries</span>}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/email-template"
                        className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            ></path>
                        </svg>
                        {isOpen && <span className="ml-3">Email Template</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
);

export default Sidebar;
