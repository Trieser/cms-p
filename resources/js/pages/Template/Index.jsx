import React, { useState } from "react";

const defaultTemplate = `
[CMS-TEMPLATE-ID:{{template_id}}]

Dear Agent, please insert this template

Inquiry : {{inquiry}}
Pax counts : {{pax_counts}}
Traveling date : {{traveling_date}}
Agent : {{agent}}
From email : {{from_email}}
Subject : {{email_subject}}
`;

const Template = () => {
    const [template, setTemplate] = useState(defaultTemplate);

    const handleChange = (e) => {
        setTemplate(e.target.value);
    };

    const handleSave = async () => {
        try {
            const res = await fetch("/api/email-template", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: template }),
            });
            const data = await res.json();
            alert("Template saved: " + data.message);
        } catch (err) {
            alert("Save failed: " + err.message);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Email Template Editor</h1>

            <textarea
                rows="15"
                className="w-full border rounded p-3 font-mono"
                value={template}
                onChange={handleChange}
            />

            <div className="mt-4 flex space-x-3">
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save Template
                </button>
                <button
                    onClick={() => setTemplate(defaultTemplate)}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                    Reset to Default
                </button>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Preview:</h2>
                <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">
                    {template}
                </pre>
            </div>
        </div>
    );
};

export default Template;
