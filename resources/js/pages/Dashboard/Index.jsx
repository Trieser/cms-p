import React from "react";
import Nexplorer from "../../assets/nexplorer.png";

const MainContent = () => {
    return (
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="mx-auto max-w-7xl">
                {/* Welcome Card */}
                <div className="relative mb-8 overflow-hidden rounded-xl bg-white p-8 shadow-lg">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 transform rounded-full bg-indigo-100"></div>
                    <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 transform rounded-full bg-indigo-50"></div>

                    <div className="relative z-10 flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-6 md:mb-0 md:w-2/3">
                            <h1 className="mb-2 text-3xl font-bold text-gray-800">
                                Welcome to Nexplorer Admin
                            </h1>
                            <p className="mb-6 text-lg text-gray-600">
                                Manage your representatives and travel services
                                with our powerful dashboard.
                            </p>
                            <div className="flex space-x-4">
                                <button className="transform rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700">
                                    Get Started
                                </button>
                                <button className="rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 shadow-sm transition-all duration-200 hover:bg-indigo-50">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="flex hidden w-1/3 justify-center md:block">
                            <div className="rounded-full bg-indigo-100 p-6 shadow-inner">
                                <img
                                    src={Nexplorer}
                                    alt="Nexplorer Logo"
                                    className="h-48 w-120 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats Section */}
                <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-xl bg-indigo-100 p-3 text-indigo-500 shadow-sm">
                                <svg
                                    className="h-6 w-6"
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
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Total Posts
                                </p>
                                <p className="text-2xl font-semibold text-gray-800">
                                    25
                                </p>
                                <p className="mt-1 text-xs text-green-500">
                                    ↑ 12% from last month
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-xl bg-green-100 p-3 text-green-500 shadow-sm">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Users</p>
                                <p className="text-2xl font-semibold text-gray-800">
                                    12
                                </p>
                                <p className="mt-1 text-xs text-green-500">
                                    ↑ 5 new this week
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-xl bg-yellow-100 p-3 text-yellow-500 shadow-sm">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Categories
                                </p>
                                <p className="text-2xl font-semibold text-gray-800">
                                    8
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    3 active
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <div className="flex items-center">
                            <div className="mr-4 rounded-xl bg-red-100 p-3 text-red-500 shadow-sm">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Page Views
                                </p>
                                <p className="text-2xl font-semibold text-gray-800">
                                    2.4K
                                </p>
                                <p className="mt-1 text-xs text-green-500">
                                    ↑ 24% from yesterday
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity Section */}
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                    <div className="border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-white px-6 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-800">
                                Recent Activity
                            </h2>
                            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                                View All
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white shadow-md">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            New post created: "Getting Started
                                            with Nexplorer"
                                        </p>
                                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                                            New
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        10 minutes ago
                                    </p>
                                    <div className="mt-2 flex space-x-2">
                                        <span className="rounded bg-indigo-100 px-2 py-1 text-xs text-indigo-800">
                                            CMS
                                        </span>
                                        <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                                            Guide
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            New user registered: John Doe
                                        </p>
                                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                                            User
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        1 hour ago
                                    </p>
                                    <div className="mt-2">
                                        <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">
                                            Representative
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white shadow-md">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            Post updated: "Nexplorer Best
                                            Practices"
                                        </p>
                                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                                            Updated
                                        </span>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                        3 hours ago
                                    </p>
                                    <div className="mt-2 flex space-x-2">
                                        <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-800">
                                            Travel
                                        </span>
                                        <span className="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                                            Tips
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
