import React, { useEffect, useState } from "react";
import CTAButton from "./Cta";

// IMPORT YOUR IMAGES HERE 👇
import slide1 from "../under1.png";
import slide2 from "../under2.png";
import slide3 from "../under3.jpg";
// Add as many as you want
const carouselImages = [slide1, slide2,slide3];

export default function ComposedUnderwaterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-4 py-0 sm:py-10 bg-gradient-to-b from-white to-[#EAFBFF]">
      <div className="mx-auto max-w-6xl">
        <div className="relative rounded-[40px] bg-[#E5FAFF] px-6 py-10 sm:px-10 sm:py-12 shadow-[0_30px_90px_rgba(15,23,42,0.15)]">
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-24 rounded-[40px] bg-[#00D4C0]/20 blur-3xl" />

          <div className="relative z-10 grid gap-10 md:grid-cols-2 items-center">
            {/* LEFT TEXT */}
            <div className="max-w-lg">
              <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-extrabold text-slate-900 uppercase leading-snug">
                SEMI-SUBMARINE CRUISES CRAFTED FOR A CALM, CURATED ISLAND ADVENTURE.
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700">
                Our semi-submarine cruises offer a stress-free blend of
                relaxation and adventure in pristine Havelock. Every detail
                from sunset timing to meals is perfectly planned. Your
                coordinator handles logistics so you enjoy magical moments:
                holding hands, watching submerged sunsets, laughing on deck,
                and marveling at bioluminescent coral.
              </p>
            </div>

            {/* RIGHT: CAROUSEL */}
            <div className="flex justify-center md:justify-center">
              <div className="overflow-hidden rounded-[32px] max-w-sm w-full">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {carouselImages.map((img, i) => (
                    <div key={i} className="min-w-full">
                      <img
                        src={img}
                        alt={`slide-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-10 flex flex-col items-center gap-3">
            <div className="relative">
              <div className="pointer-events-none absolute inset-x-[-40px] bottom-0 h-10 rounded-full bg-[#00D4C0]/40 blur-2xl" />
              <CTAButton
                text="Book Your Semi-Submarine Underwater Escape Now"
                className="relative z-10 px-10 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm font-semibold uppercase BM"
              />
            </div>

            <p className="text-[11px] sm:text-sm text-slate-600 text-center max-w-2xl italic mt-4">
              Join Havelock&apos;s most photographed semi-submarine; seats filling fast, next departure nearly full.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
