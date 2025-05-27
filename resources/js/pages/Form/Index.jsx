import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FormPage = () => {
    const { token } = useParams();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        inquiry: "",
        pax_counts: "",
        traveling_date: "",
        agent: "",
        email_subject: "",
    });

    useEffect(() => {
        axios
            .get(`/api/form-validate/${token}`)
            .then((res) => {
                setEmail(res.data.email);
                setLoading(false);
            })
            .catch(() => {
                setError("Token expired or invalid");
                setLoading(false);
            });
    }, [token]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/api/form-submit/${token}`, form);
            alert("Inquiry submitted!");
        } catch (err) {
            alert("Submit failed: " + err.response?.data?.message);
        }
    };

    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-red-600">{error}</div>;

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Fill Inquiry for {email}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    placeholder="Inquiry"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    name="pax_counts"
                    type="number"
                    value={form.pax_counts}
                    onChange={handleChange}
                    placeholder="Pax Counts"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    name="traveling_date"
                    type="date"
                    value={form.traveling_date}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    name="agent"
                    value={form.agent}
                    onChange={handleChange}
                    placeholder="Agent Name"
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    name="email_subject"
                    value={form.email_subject}
                    onChange={handleChange}
                    placeholder="Email Subject"
                    className="w-full border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                    Submit Inquiry
                </button>
            </form>
        </div>
    );
};

export default FormPage;
