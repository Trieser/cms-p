import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Create = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        inquiry: '',
        code: '',
        inquiry_id: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [inquiries, setInquiries] = useState([]);

    // Fetch inquiries for dropdown
    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await axios.get('/inquiries');
                setInquiries(response.data.data || []);
            } catch (error) {
                console.error('Error fetching inquiries:', error);
            }
        };
        fetchInquiries();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            await axios.post('/t-inquiries/store', formData);
            onSuccess();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error creating T-Inquiry:', error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Create New T-Inquiry</h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4 mb-4">
                            {/* Code */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Code *</label>
                                <input
                                    type="text"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.code ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                    placeholder="Enter unique code"
                                />
                                {errors.code && <p className="text-red-500 text-xs mt-1">{errors.code[0]}</p>}
                            </div>

                            {/* T-Inquiry Content */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">T-Inquiry Content *</label>
                                <textarea
                                    name="inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.inquiry ? 'border-red-500' : 'border-gray-300'}`}
                                    rows="3"
                                    required
                                    placeholder="Enter T-Inquiry content"
                                />
                                {errors.inquiry && <p className="text-red-500 text-xs mt-1">{errors.inquiry[0]}</p>}
                            </div>

                            {/* Related Inquiry */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Related Inquiry *</label>
                                <select
                                    name="inquiry_id"
                                    value={formData.inquiry_id}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.inquiry_id ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                >
                                    <option value="">Select an Inquiry</option>
                                    {inquiries.map(inquiry => (
                                        <option key={inquiry.id} value={inquiry.id}>
                                            {inquiry.inquiry} (ID: {inquiry.id})
                                        </option>
                                    ))}
                                </select>
                                {errors.inquiry_id && <p className="text-red-500 text-xs mt-1">{errors.inquiry_id[0]}</p>}
                            </div>
                        </div>

                        <div className="flex justify-end space-x-3 mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Creating...' : 'Create T-Inquiry'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;