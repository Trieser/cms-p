import React, { useState } from 'react';

const Navbar = ({ toggleSidebar }) => {
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center px-6 h-16">
                {/* Left: Hamburger and Search */}
                <div className="flex items-center space-x-4">
                    {/* Hamburger Menu Button */}
                    <button 
                        onClick={toggleSidebar} 
                        className="text-gray-500 focus:outline-none focus:text-gray-700"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Search */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </span>
                        <input 
                            type="search" 
                            className="py-2 pl-10 pr-4 w-64 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500" 
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/* Right: Notifications and Profile */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <div className="relative">
                        <button 
                            onClick={() => setNotificationsOpen(!notificationsOpen)}
                            className="text-gray-500 relative p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                        </button>
                        
                        {/* Notification Dropdown */}
                        {notificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                                <div className="py-2">
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <p className="text-sm font-semibold text-gray-700">Notifications</p>
                                    </div>
                                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100 border-b border-gray-200">
                                        <div className="flex-shrink-0">
                                            <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">New comment on your post</p>
                                            <p className="text-xs text-gray-500">5 minutes ago</p>
                                        </div>
                                    </a>
                                    <a href="#" className="flex px-4 py-3 hover:bg-gray-100">
                                        <div className="flex-shrink-0">
                                            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">System update completed</p>
                                            <p className="text-xs text-gray-500">1 hour ago</p>
                                        </div>
                                    </a>
                                </div>
                                <a href="#" className="block text-center bg-gray-50 text-sm font-medium text-indigo-600 py-2 hover:bg-gray-100">
                                    View all notifications
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} 
                            className="flex items-center focus:outline-none"
                        >
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 overflow-hidden">
                                <img src="https://via.placeholder.com/40" alt="Profile" className="h-full w-full object-cover" />
                            </div>
                            <span className="ml-2 font-medium text-gray-700">Admin</span>
                            <svg className="ml-1 h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Profile Dropdown Menu */}
                        {profileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Settings
                                </a>
                                <div className="border-t border-gray-200"></div>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Logout
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;