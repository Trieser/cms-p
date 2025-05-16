import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen }) => (
    <aside className={`fixed inset-y-0 left-0 z-30 bg-gray-800 text-white transition-all duration-300 ease-in-out transform ${isOpen ? 'w-64' : 'w-16'} md:translate-x-0`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
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
                    <Link to="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Dashboard</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/inquiries" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Inquiries</span>}
                    </Link>
                </li>
                {/* <li>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Posts</span>}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Categories</span>}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Users</span>}
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {isOpen && <span className="ml-3">Settings</span>}
                    </a>
                </li> */}
            </ul>
        </nav>
    </aside>
);

export default Sidebar;