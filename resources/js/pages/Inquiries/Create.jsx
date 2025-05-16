import React, { useState } from 'react';
import axios from 'axios';

const Create = ({ onClose, onSuccess }) => {
    const [formData, setFormData] = useState({
        inquiry: '',
        pax_counts: '',
        traveling_date: '',
        agent: '',
        from_email: '',
        status: 'pending',
        person_in_charge: '',
        inquiry_type: '',
        inquiry_received: '',
        email_subject: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            await axios.post('/inquiries', formData);
            onSuccess();
        } catch (error) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Error creating inquiry:', error);
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
                        <h2 className="text-xl font-semibold text-gray-800">Create New Inquiry</h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Inquiry ID */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry ID *</label>
                                <input
                                    type="text"
                                    name="inquiry"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.inquiry ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.inquiry && <p className="text-red-500 text-xs mt-1">{errors.inquiry[0]}</p>}
                            </div>

                            {/* Pax Count */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pax Count *</label>
                                <input
                                    type="number"
                                    name="pax_counts"
                                    value={formData.pax_counts}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.pax_counts ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.pax_counts && <p className="text-red-500 text-xs mt-1">{errors.pax_counts[0]}</p>}
                            </div>

                            {/* Travel Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date *</label>
                                <input
                                    type="date"
                                    name="traveling_date"
                                    value={formData.traveling_date}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.traveling_date ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.traveling_date && <p className="text-red-500 text-xs mt-1">{errors.traveling_date[0]}</p>}
                            </div>

                            {/* Agent */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Agent *</label>
                                <input
                                    type="text"
                                    name="agent"
                                    value={formData.agent}
                                    onChange={handleChange}
                                    className={`w-full p-2 border rounded ${errors.agent ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.agent && <p className="text-red-500 text-xs mt-1">{errors.agent[0]}</p>}
                            </div>

                            {/* Add other fields similarly */}
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
                                {isSubmitting ? 'Creating...' : 'Create Inquiry'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;