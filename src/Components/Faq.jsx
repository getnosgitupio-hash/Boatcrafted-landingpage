import React, { useState } from "react";

const faqs = [
  {
    question: "What makes Andaman Explorers’ semi-submarine experience unique?",
    answer:
      "Our semi-submarine is India’s only glass-floor underwater vessel designed for small groups (max 80 guests), offering ethical coral viewing, sunset parties, kayaking, and professional photography curated by experts with 27+ years of marine adventure experience.",
  },
  {
    question: "How do I book and confirm my spot?",
    answer:
      "Booking is quick and secure online with instant confirmation. After booking, our team will reach out personally to tailor your experience, including dietary preferences, celebrations, or add-ons like couple photography.",
  },
  {
    question: "Are group bookings allowed?",
    answer:
      "Yes, groups are welcome until we reach full capacity. Our cruises foster connection, making it ideal for friend reunions, birthdays, or private celebrations.",
  },
  {
    question: "Is the experience suitable for solo travellers?",
    answer:
      "Absolutely! Many solo explorers have connected with others onboard and left with lasting friendships. Our crew ensures a warm and inclusive atmosphere.",
  },
  {
    question: "What is included in the packages?",
    answer:
      "Packages vary from coral viewing + lunch to sunset and dinner + scuba adventures. All include professional photos, expert guides, and transparent pricing with no hidden costs.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "Safety is our top priority. We employ certified scuba and kayaking instructors, rigorous protocols for boarding, and provide all necessary equipment.",
  },
  {
    question: "What happens if the weather forces cancellation?",
    answer:
      "You will receive a full refund with no questions asked. Your satisfaction and safety come first.",
  },
  {
    question: "When should I book to secure a spot?",
    answer:
      "Due to limited capacity and high demand, especially on weekends and during the honeymoon season, we recommend booking 2-3 weeks in advance. Dates often fill quickly.",
  },
  {
    question: "How are honeymoon experiences different?",
    answer:
      "Honeymoon packages offer private, customizable tables, special décor, champagne toasts, and personalised photography for an intimate, unforgettable underwater celebration.",
  },
  {
    question: "Can I bring children?",
    answer:
      "We recommend this experience for ages 12 and up due to the nature of the semi-submarine and activities onboard.",
  },
  {
    question: "What should I bring on the voyage?",
    answer:
      "Bring comfortable clothing, swimwear, sunscreen, and your sense of adventure! We provide all speciality equipment.",
  },
];

function Chevron({ open }) {
  return (
    <span className="ml-3 inline-flex h-5 w-5 items-center justify-center">
      <svg
        className={`h-4 w-4 transition-transform duration-300 ${
          open ? "rotate-180" : "rotate-0"
        }`}
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 8l5 5 5-5"
          stroke="#0f172a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-gradient-to-b from-[#E7FAFF] to-white px-4 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-[22px] sm:text-[36px] md:text-[42px] font-extrabold tracking-wide uppercase text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-2 sm:space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const isFirst = index === 0;

            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white transition-shadow duration-300 ${
                  isOpen
                    ? "border-[#00C4B5] shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
                    : isFirst
                    ? "border-[#CFE9F3]"
                    : "border-transparent"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900 font-alber">
                    {item.question}
                  </span>
                  <Chevron open={isOpen} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-700 BM">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
