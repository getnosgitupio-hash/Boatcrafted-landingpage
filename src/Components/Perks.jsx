import React from "react";
import CTAButton from "./Cta";

// Main image
import honeymoonImg from "../sunset.jpg";

// ICONS – replace with your real paths
import iconHeart from "../heart.png";
import iconSparkle from "../sparkle.png";
import iconCamera from "../camera.png";
import iconGift from "../gift.png";
import iconCouple from "../couple.png";

const perks = [
  {
    title:
      "Only 2 private tables on each cruise, with exclusive decor, music, and personalized touches.",
    icon: iconHeart,
  },
  {
    title:
      "Romantic sunset moments with champagne toasts, set against breathtaking ocean views.",
    icon: iconSparkle,
  },
  {
    title:
      "Hand-in-hand coral viewing through our glass-window semi-submarine experience.",
    icon: iconCamera,
  },
  {
    title: "Professional couple photography, capturing a few beautiful moments to treasure.",
    icon: iconGift,
  },
  {
    title:
      "Dedicated butler service with thoughtful honeymoon gestures and surprise delights.",
    icon: iconCouple,
  },
];

function HoneymoonIcon({ src, alt }) {
  return (
    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-xl">
      <img src={src} alt={alt} className="h-10 w-10 object-contain" />
    </div>
  );
}

export default function HoneymoonVoyagesSection() {
  return (
    <section className="bg-gradient-to-b from-[#E9FBFD] to-white px-2 md:px-4 py-10 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <header className="max-w-5xl">
          <h2 className="text-[22px] sm:text-[28px] md:text-[43px] leading-tight font-extrabold text-slate-900 uppercase">
            Honeymoon CRUISE: <br className="hidden sm:block" /> Where Romance
            Meets The Reef
          </h2>

          <span className="block mt-6 text-sm sm:text-[18px] leading-snug font-inter text-slate-600">
            Craft your perfect romantic Semi-Submarine adventure exclusively designed for couples
            who value privacy and personalized
            experiences.
          </span>
        </header>

        {/* Main content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 items-start">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-center">
            <div className="overflow-hidden">
              <img
                src={honeymoonImg}
                alt="Couple enjoying sunset honeymoon cruise"
                className="w-[480px] h-[450px] object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-4 -mt-0 md:mt-2">
            <p className="text-2xl text-teal-700 font-inter-medium text-center md:text-left">
              Perfect For Honeymooners
            </p>

            <div className="space-y-2">
              {perks.map((perk, index) => (
                <div key={index} className="flex gap-2">
                  <HoneymoonIcon src={perk.icon} alt={`perk icon ${index + 1}`} />
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 font-inter">
                    {perk.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA moved here on the RIGHT for desktop */}
            <div className="mt-10 flex flex-col items-end gap-3 text-right">
              <CTAButton
                text="Secure Your Romantic Hideaway Beneath Waves"
                className="px-1 md:px-14 py-4 text-sm sm:text-xl "
              />

              <p className="text-xs sm:text-base text-slate-800 max-w-sm md:max-w-lg  mt-4 italic font-inter text-center">
               Only 2 honeymoon tables per underwater voyage | Reserve immediately before they close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
