import React from "react";
// Replace with your own icon path
import warningIcon from "../p.png";
import guestIcon from "../m1.png";

import travelersIcon from "../m2.png";

export default function SemiSubmarineUrgencySection() {
  return (
    <section className="relative bg-gradient-to-r from-[#E7000B] to-[#FB2C36] px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Warning icon */}
        <div className="flex justify-center mb-6">
          <div className="flex h-22 w-22 items-center justify-center rounded-full ">
            <img
              src={warningIcon}
              alt="warning"
              className="h-26 w-26 object-contain"
            />
          </div>
        </div>

        {/* Main card */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-10 text-center text-white ">
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-extrabold tracking-tight uppercase leading-tight">
            Semi-submarine SEATS sell out fast - join the next cruise now
          </h2>

          <p className="mt-5 text-sm sm:text-xl md:text-xl text-red-50 leading-relaxed bin text-left">
  Every semi-submarine cruise is limited to{" "}
  <span className="inline-block bg-white text-red-600 px-2 py-0.5 rounded font-semibold">
    80 guests
  </span> to ensure an uncrowded experience.
</p>

            <p className="mt-5 text-sm sm:text-base md:text-xl text-red-50 leading-relaxed bin text-left">
            Sunset, kayaking, dinner,
            and scuba cruises fill up quickly, especially on weekends and during
            festive weeks, with no waiting list once they are full. Our last
            departures sold out two weeks early, attracting travellers from
            across India. 
          </p>
          <div className="mt-6 rounded-xl bg-white/20  px-6 py-4 text-sm sm:text-base text-white text-center max-w-2xl mx-auto backdrop-blur-sm SM font-inter">
  If you're seeing this page right now, you're early,&nbsp;
  <a
    href="#"
    className="underline underline-offset-2 decoration-white/60 hover:decoration-white transition"
  >
    but not for long.
  </a>
</div>


          {/* CTA inside card */}
          
        </div>

        {/* NEW: Stats cards + bottom CTA block */}
        <div className="mt-10 space-y-10">
          {/* Stats row */}
<div className="flex justify-center gap-3 sm:gap-8">

  {/* Card 1 */}
  <div className="rounded-3xl bg-white/10 px-6 py-5 text-center text-white">
    <img
      src={guestIcon}
      alt="guest limit"
      className="mx-auto mb-3 h-8 w-8 object-contain"
    />
    <div className="text-2xl leading-none font-inter">80</div>
    <p className="mt-4 text-xs sm:text-sm text-red-100">
      Guest Limit Per Cruise
    </p>
  </div>

  {/* Card 2 */}
  <div className="rounded-3xl bg-white/10 px-6 py-5 text-center text-white">
    <img
      src={travelersIcon}
      alt="happy travelers"
      className="mx-auto mb-3 h-8 w-8 object-contain"
    />
    <div className="text-2xl leading-none font-inter">50,000+</div>
    <p className="mt-4 text-xs sm:text-sm text-red-100">
      Happy Travelers
    </p>
  </div>

</div>




          {/* Bottom white pill CTA */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-14 py-3 sm:py-4 text-xs sm:text-xl font-semibold uppercase tracking-wide text-[#F22137]  hover:scale-[1.03] active:scale-[0.98] transition-transform BM"
            >
           Experience 27 Years of Semi-Submarine Excellence
            </button>

            <p className="text-xs sm:text-base text-red-100 text-center italic max-w-2xl mt-2">
Instant confirmation. Weekend semi-submarine fill in 48 hours.           </p>
          </div>
        </div>
      </div>
    </section>
  );
}
