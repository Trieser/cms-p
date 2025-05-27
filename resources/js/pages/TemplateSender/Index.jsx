import React, { useState, useEffect } from "react";
import axios from "axios";

const defaultTemplate = `
Dear Agent, please fill the inquiry below:

Inquiry : {{inquiry}}
Pax counts : {{pax_counts}}
Traveling date : {{traveling_date}}
Agent : {{agent}}
From email : {{from_email}}
Subject : {{email_subject}}

Click to fill: {{form_link}}
`;

const TemplateSender = () => {
    const [email, setEmail] = useState("");
    const [template, setTemplate] = useState(defaultTemplate);
    const [formLink, setFormLink] = useState(null);

    const handleSend = async () => {
        try {
            const res = await axios.post("/api/form-token", { email });
            const { token, link } = res.data;

            const filled = template.replace("{{form_link}}", link);

            await axios.post("/api/inquiries/send-email", {
                to: email,
                subject: "Please fill this inquiry form",
                content: filled,
            });

            setFormLink(link);
            alert("Email sent!");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };

    const copyLink = () => {
        navigator.clipboard.writeText(formLink);
        alert("Link copied to clipboard!");
    };

    return (
        <div className="max-w-3xl p-6">
            <h1 className="mb-4 text-2xl font-bold">
                Send Inquiry Form to Agent
            </h1>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Agent Email"
                className="mb-4 w-full rounded border p-2"
            />

            <textarea
                rows={12}
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full rounded border p-3 font-mono"
            />

            <div className="mt-4 flex gap-4">
                <button
                    onClick={handleSend}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Send Template
                </button>

                {formLink && (
                    <button
                        onClick={copyLink}
                        className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
                    >
                        Copy Link
                    </button>
                )}
            </div>

            {formLink && (
                <div className="mt-3 text-sm text-green-700">
                    ✅ Sent to {email} — Link:{" "}
                    <a
                        href={formLink}
                        className="text-blue-700 underline"
                        target="_blank"
                    >
                        {formLink}
                    </a>
                </div>
            )}
        </div>
    );
};

export default TemplateSender;
