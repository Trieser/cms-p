import React, { useState, useEffect } from "react";
import axios from "axios";
import Create from "./Create";

// Format date to be more readable
const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const InquiryRow = ({ inquiry, onDelete, onView }) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this inquiry?")) {
            try {
                await axios.delete(`/inquiries/${inquiry.id}`);
                onDelete();
            } catch (error) {
                console.error("Error deleting inquiry:", error);
            }
        }
    };

    return (
        <tr className="hover:bg-gray-50">
            <td className="whitespace-nowrap px-6 py-4">{inquiry.id}</td>
            <td className="whitespace-nowrap px-6 py-4">
                {inquiry.pax_counts || inquiry.pax_count || "N/A"}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
                {formatDate(inquiry.traveling_date || inquiry.travel_date)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
                {inquiry.agent?.name || inquiry.agent || "N/A"}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
                <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 
          ${
              inquiry.status === "Open"
                  ? "bg-green-100 text-green-800"
                  : inquiry.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
          }`}
                >
                    {inquiry.status || "N/A"}
                </span>
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                <button
                    className="mr-3 rounded px-3 py-1 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-900"
                    onClick={() => onView(inquiry)}
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
    const [inquiries, setInquiries] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch inquiries
    const fetchInquiries = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("/api/inquiries");
            console.log("API Response:", response.data);

            // Handle different API response formats
            if (response.data && Array.isArray(response.data)) {
                setInquiries(response.data);
            } else if (
                response.data &&
                response.data.data &&
                Array.isArray(response.data.data)
            ) {
                setInquiries(response.data.data);
            } else {
                console.warn(
                    "API response format is unexpected:",
                    response.data
                );
                setInquiries([]);
            }
        } catch (error) {
            console.error("Error fetching inquiries:", error);
            setInquiries([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    // Refresh inquiry list after creation
    const handleInquiryCreated = () => {
        setShowCreateModal(false);
        fetchInquiries();
    };

    // Handle viewing inquiry details
    const handleViewInquiry = (inquiry) => {
        setSelectedInquiry(inquiry);
        setShowViewModal(true);
    };

    // View Modal Component
    const ViewModal = ({ inquiry, onClose }) => {
        if (!inquiry) return null;

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
                <div className="m-4 w-full max-w-xl rounded-lg bg-white p-6 shadow-xl">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-800">
                            Inquiry Details
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
                            <p className="text-sm text-gray-500">ID</p>
                            <p className="font-medium">{inquiry.id}</p>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">Type</p>
                            <p className="font-medium">
                                {inquiry.inquiry_type || "N/A"}
                            </p>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">
                                Inquiry Text
                            </p>
                            <p className="font-medium">
                                {inquiry.inquiry || "N/A"}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">
                                    Passenger Count
                                </p>
                                <p className="font-medium">
                                    {inquiry.pax_counts ||
                                        inquiry.pax_count ||
                                        "N/A"}
                                </p>
                            </div>

                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">
                                    Travel Date
                                </p>
                                <p className="font-medium">
                                    {formatDate(
                                        inquiry.traveling_date ||
                                            inquiry.travel_date
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">Agent</p>
                                <p className="font-medium">
                                    {inquiry.agent?.name ||
                                        inquiry.agent ||
                                        "N/A"}
                                </p>
                            </div>

                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="font-medium">
                                    <span
                                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5 
                    ${
                        inquiry.status === "Open"
                            ? "bg-green-100 text-green-800"
                            : inquiry.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                                    >
                                        {inquiry.status || "N/A"}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">
                                    Person in Charge
                                </p>
                                <p className="font-medium">
                                    {inquiry.person_in_charge || "N/A"}
                                </p>
                            </div>

                            <div className="rounded bg-gray-50 p-3">
                                <p className="text-sm text-gray-500">
                                    Inquiry Received
                                </p>
                                <p className="font-medium">
                                    {inquiry.inquiry_received ||
                                        formatDate(inquiry.created_at) ||
                                        "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">
                                {inquiry.from_email || "N/A"}
                            </p>
                        </div>

                        <div className="rounded bg-gray-50 p-3">
                            <p className="text-sm text-gray-500">
                                Email Subject
                            </p>
                            <p className="font-medium">
                                {inquiry.email_subject || "N/A"}
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
                    Inquiries Management
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
                    Add Inquiry
                </button>
            </div>

            {/* Inquiry Table */}
            <div className="overflow-hidden rounded-lg bg-white shadow">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Passengers
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Travel Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Agent
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Status
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
                                        colSpan="6"
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
                            ) : inquiries.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-6 py-4 text-center"
                                    >
                                        <div className="text-gray-500">
                                            No inquiries found
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                inquiries.map((inquiry) => (
                                    <InquiryRow
                                        key={inquiry.id}
                                        inquiry={inquiry}
                                        onDelete={fetchInquiries}
                                        onView={handleViewInquiry}
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
                    onSuccess={handleInquiryCreated}
                />
            )}

            {/* View Modal */}
            {showViewModal && selectedInquiry && (
                <ViewModal
                    inquiry={selectedInquiry}
                    onClose={() => {
                        setShowViewModal(false);
                        setSelectedInquiry(null);
                    }}
                />
            )}
        </div>
    );
};

export default Index;
