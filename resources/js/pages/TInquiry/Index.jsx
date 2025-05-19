import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";

const TInquiryRow = ({ tInquiry, onDelete, onView }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this T-Inquiry?")) {
            try {
                await axios.delete(`/api/t-inquiries/${tInquiry.id}`);
                onDelete();
            } catch (error) {
                console.error("Error deleting T-Inquiry:", error);
                alert("Failed to delete T-Inquiry. Please try again.");
            }
        }
    };

    // Get the inquiry name from the related inquiry object if it exists
    const inquiryName =
        tInquiry.inquiry && typeof tInquiry.inquiry === "object"
            ? tInquiry.inquiry.inquiry
            : tInquiry.inquiry || "N/A";

    return (
        <tr className="hover:bg-gray-50">
            <td className="whitespace-nowrap px-6 py-4">
                {/* Safely display inquiry name as string, not object */}
                {inquiryName}
            </td>
            <td className="whitespace-nowrap px-6 py-4">{tInquiry.inquiry_detail}</td>
            <td className="whitespace-nowrap px-6 py-4">
                {tInquiry.inquiry_id}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                <button
                    className="mr-3 rounded px-3 py-1 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-900"
                    onClick={() => onView(tInquiry)}
                >
                    View
                </button>
                <button
                    className="rounded px-3 py-1 text-red-600 hover:bg-red-50 hover:text-red-900"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

const Index = () => {
    const [tInquiries, setTInquiries] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedTInquiry, setSelectedTInquiry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tInquiries
    const fetchTInquiries = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get("/api/t-inquiries");
            console.log("API Response:", response.data); // For debugging

            if (response.data && response.data.data) {
                setTInquiries(response.data.data);
            } else {
                console.warn("Unexpected API response format:", response.data);
                setTInquiries([]);
            }
        } catch (error) {
            console.error("Error fetching T-Inquiries:", error);
            setError("Failed to load T-Inquiries. Please try again.");
            setTInquiries([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTInquiries();
    }, []);

    const handleTInquiryCreated = () => {
        setShowCreateModal(false);
        fetchTInquiries();
    };

    const handleViewTInquiry = (tInquiry) => {
        setSelectedTInquiry(tInquiry);
        setShowViewModal(true);
    };

    const ViewModal = ({ tInquiry, onClose }) => {
        if (!tInquiry) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
                <div className="m-4 w-full max-w-xl rounded-lg bg-white p-6 shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">
                            T-Inquiry Details
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">Inquiry</p>
                            <p className="font-medium">
                                {/* Safely display tInquiry.inquiry */}
                                {tInquiry.inquiry &&
                                typeof tInquiry.inquiry === "object"
                                    ? tInquiry.inquiry.inquiry || "N/A"
                                    : tInquiry.inquiry || "N/A"}
                            </p>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">Inquiry Detail</p>
                            <p className="font-medium">
                                {tInquiry.inquiry_detail || "N/A"}
                            </p>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">Inquiry ID</p>
                            <p className="font-medium">
                                {tInquiry.inquiry_id || "N/A"}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={onClose}
                            className="rounded bg-gray-200 py-2 px-4 font-bold text-gray-800 hover:bg-gray-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                    Inquiry Management
                </h1>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Add T-Inquiry
                </button>
            </div>

            {/* T-Inquiry Table */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Inquiry
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Inquiry Detail
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Inquiry ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {isLoading ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-4 text-center"
                                    >
                                        <div className="flex items-center justify-center">
                                            <svg
                                                className="mr-3 h-5 w-5 animate-spin text-blue-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Loading...
                                        </div>
                                    </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-4 text-center text-red-500"
                                    >
                                        {error}
                                    </td>
                                </tr>
                            ) : tInquiries.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-4 text-center"
                                    >
                                        <div className="text-gray-500">
                                            No T-Inquiries found
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                tInquiries.map((tInquiry) => (
                                    <TInquiryRow
                                        key={tInquiry.id}
                                        tInquiry={tInquiry}
                                        onDelete={fetchTInquiries}
                                        onView={handleViewTInquiry}
                                    />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Create Modal */}
            {showCreateModal && (
                <Create
                    onClose={() => setShowCreateModal(false)}
                    onSuccess={handleTInquiryCreated}
                />
            )}

            {/* View Modal */}
            {showViewModal && selectedTInquiry && (
                <ViewModal
                    tInquiry={selectedTInquiry}
                    onClose={() => {
                        setShowViewModal(false);
                        setSelectedTInquiry(null);
                    }}
                />
            )}
        </div>
    );
};

export default Index;