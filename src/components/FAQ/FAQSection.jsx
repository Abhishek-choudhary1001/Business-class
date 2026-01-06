import FAQItem from "../FAQ/FAQItem";

function FAQSection() {
    const faqs = [
        {
            question: "What does Business-Class.com offer?",
            answer:
                "Business-Class.com offers discounted business and first-class flight deals with personalized travel assistance.",
        },
        {
            question: "How do I book a flight through Business-Class.com?",
            answer:
                "You can request a quote online or contact a travel specialist who will help you book the best available option.",
        },
        {
            question: "What kind of flights can I look for?",
            answer:
                "You can search for international and domestic business and first-class flights with major airlines.",
        },
        {
            question: "Why should I fly in business or first class and what is included?",
            answer:
                "Business and first class provide more comfort, premium meals, lounge access, priority boarding, and extra baggage.",
        },
        {
            question: "How can I pay for my booking?",
            answer:
                "Payments can be made using major credit cards and other secure payment methods.",
        },
        {
            question: "How can I contact Business-Class.com?",
            answer:
                "You can reach out via phone, email, or the contact form on the website.",
        },
    ];

    return (
        <section className="mx-auto max-w-6xl px-4 py-16">

            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-wide text-gray-900">
                    FREQUENTLY ASKED QUESTIONS
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                    More answers can be found on the dedicated{" "}
                    <span className="text-orange-400">FAQ</span> page
                </p>
            </div>


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                <div>
                    <FAQItem {...faqs[0]} />
                    <FAQItem {...faqs[1]} />
                    <FAQItem {...faqs[2]} />
                </div>


                <div>
                    <FAQItem {...faqs[3]} />
                    <FAQItem {...faqs[4]} />
                    <FAQItem {...faqs[5]} />
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
