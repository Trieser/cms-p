import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard/Index";
import Inquiries from "./pages/Inquiries/Index";
import TInquiries from "./pages/TInquiry/Index";
import Template from "./pages/Template/Index";
import TemplateSender from "./pages/TemplateSender/Index";
import FormPage from "./pages/Form/Index";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <Router>
            <div className="flex h-screen bg-gray-100">
                <Sidebar isOpen={sidebarOpen} />

                <div
                    className={`flex-1 transition-all duration-300 ${
                        sidebarOpen ? "ml-64" : "ml-16"
                    }`}
                >
                    {/* Header with toggle button */}
                    <header className="flex h-16 items-center bg-white px-4 shadow-sm">
                        <button
                            onClick={toggleSidebar}
                            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
                        >
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
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>
                        <h1 className="ml-4 text-xl font-semibold text-gray-800">
                            CMS-Nexplorer
                        </h1>
                    </header>

                    {/* Main content */}
                    <main className="p-6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/inquiries" element={<Inquiries />} />
                            <Route path="/t-inquiries" element={<TInquiries />} />
                            <Route path="/email-template" element={<Template />} />
                            <Route path="/template-sender" element={<TemplateSender />} />
                            <Route path="/inquiry-fill/:token" element={<FormPage />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    root.render(<App />);
}
