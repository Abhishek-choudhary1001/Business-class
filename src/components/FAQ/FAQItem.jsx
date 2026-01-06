import { useState } from "react";

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between text-left"
            >
                <span className="text-base font-semibold text-gray-900">
                    {question}
                </span>

                <svg
                    className={`h-5 w-5 transform text-orange-400 transition-transform ${open ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {open && (
                <p className="mt-3 text-sm text-gray-600">
                    {answer}
                </p>
            )}
        </div>
    );
}

export default FAQItem;
