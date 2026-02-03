import React from "react";
import CTAButton from "./Cta.jsx";

import quoteImg from "../Icon.png";
import starImg from "../star-row.png";

import p1 from "../gallery-1.jpg";
import p2 from "../gallery-2.jpg";
import p3 from "../gallery-3.JPG";
import p4 from "../gallery-4.jpg";

const photos = [p1, p2, p3, p4];

const testimonials = [
  {
    id: 1,
    quote:
      "Went with my squad expecting a typical party boat. This BLEW our expectations. The semi-submarine Semi-Submarinecoral viewing was insane, the DJ kept the vibe perfect, and we made friends with other groups. Already planning our next trip.",
    name: "Vikram & Crew",
    label: "Friend Group (Mumbai)",
  },
  {
    id: 2,
    quote:
      "Best decision we made for our Andaman trip. My husband and I wanted romance + adventure, and this delivered both. The sunset was magical, scuba diving from the semi-submarine was thrilling, and the food was restaurant-quality. Worth every rupee.",
    name: "Priya & Rohan",
    label: "Couple",
  },
  {
    id: 3,
    quote:
      "I traveled solo and was nervous about feeling out of place. The crew made me feel welcome instantly, and I connected with other travelers over Semi-Submarinecoral viewing and kayaking. Left with new friends and incredible memories.",
    name: "Dinesh",
    label: "Solo Traveller (Bangalore)",
  },
  {
    id: 4,
    quote:
      "We have done party cruises in Goa and Thailand. This is on another level. The semi-submarine Semi-Submarine aspect is genuinely unique, limited capacity means you are not sardine-packed, and the team actually cares. I highly recommend it.",
    name: "Aisha & Neha",
    label: "Adventure Duo",
  },
];

function TestimonialCard({ item }) {
  return (
    <article className="bg-[#ECFAFB] flex flex-col  h-full p-5 sm:p-6 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] max-w-xl mx-auto">
      <div className="space-y-3">
        <img src={quoteImg} alt="quote" className="h-5 sm:h-6" />
        <p className="text-[13px] sm:text-base leading-normal text-slate-700 font-inter italic">
          "{item.quote}"
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="text-[16px]  text-slate-900 font-inter BM">{item.name}</p>
          <p className="text-[16px] text-slate-500 font-inter BM ">{item.label}</p>
        </div>
        <img src={starImg} alt="stars" className="h-4 w-auto" />
      </div>
    </article>
  );
}

export default function RealExperiencesSection() {
  return (
    <section className="bg-white px-4 pt-10 sm:pt-10 pb-10">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="max-w-6xl text-[22px] sm:text-[28px] md:text-[40px] font-bold uppercase tracking-wide text-center text-slate-900 font-outfit">
          Real Travelers, Real Experiences
        </h2>

        {/* Testimonials with Top Images */}
   <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
  {testimonials.map((item, i) => (
    <div
      key={item.id}
      className="overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.12)] flex flex-col h-full"
    >
      <img
        src={photos[i]}
        alt={`Testimonial ${i + 1}`}
        className="w-full h-[300px] object-cover object-center"
      />

      <div className="flex-1 flex flex-col">
        <TestimonialCard item={item} />
      </div>
    </div>
  ))}
</div>


        {/* CTA Button */}
        <div className="mt-10 flex flex-col items-center gap-2 text-center">
          <CTAButton
            text="Book Your Magical Submarine Adventure Now"
            className="px-0 sm:px-10 py-3 sm:py-4 text-[13px] sm:text-[15px] BM"
          />
          <p className="text-[11px] sm:text-base text-slate-800 max-w-2xl BM italic mt-4">
           Join India’s exclusive 80-guest semi-submarine; seats close when full, no waiting list.
          </p>
        </div>
      </div>
    </section>
  );
}
