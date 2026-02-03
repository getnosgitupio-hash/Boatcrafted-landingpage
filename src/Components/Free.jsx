import React from "react";
import tickIcon from "../tick.png";

export default function LimitedDatesSection() {
  return (
    <section className=" to-white px-4 py-0 sm:py-10">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2
          className="text-[22px] sm:text-[26px] md:text-[40px] uppercase text-slate-900 tracking-wide 
             drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
        >
          LIMITED DATES | BOOK BEFORE THEY FILL
        </h2>


        {/* Subheading */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 max-w-4xl mx-auto bin">
          Our semi-submarine at Havelock Island caps at 80 guests to ensure intimacy and personalized experiences. Because of limited capacity, dates fill 2-3 weeks ahead especially during the honeymoon season (Nov-Feb) and weekends.
        </p>

        {/* Current Availability */}
        <div className="mt-10 text-center">
          <p className="text-sm sm:text-xl  text-slate-800 mb-4 bin">
            Current Availability:
          </p>

          <div className="space-y-4">

            {/* Item */}
            {/* <div className="flex items-center gap-2 border border-[#009689] rounded-xl py-3 px-4 bg-white shadow-sm max-w-2xl mx-auto">
              <div className="flex h-10 w-10 items-center justify-center rounded-full /20">
                <img
                  src={tickIcon}
                  alt="tick icon"
                  className="h-6 w-6 object-contain"
                />
              </div>

              <p className="text-sm sm:text-base text-slate-700">
                November 2025: Only 3 dates left
              </p>
            </div> */}

            {/* Item */}
            <div className="flex items-center gap-2 border border-[#009689] rounded-xl py-3 px-4 bg-white shadow-sm max-w-2xl mx-auto">
              <div className="flex h-10 w-10 items-center justify-center rounded-full /20">
                <img
                  src={tickIcon}
                  alt="tick icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-700">
                November 2025: Only 3 dates left
              </p>
            </div>

            {/* Item */}
            <div className="flex items-center gap-2 border border-[#009689] rounded-xl py-3 px-4 bg-white shadow-sm max-w-2xl mx-auto">
             <div className="flex h-10 w-10 items-center justify-center rounded-full /20">
                <img
                  src={tickIcon}
                  alt="tick icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-700">
              December 2025: Weekend slots filling fast, weekdays still available
              </p>
            </div>


            <div className="flex items-center gap-2 border border-[#009689] rounded-xl py-3 px-4 bg-white shadow-sm max-w-2xl mx-auto">
             <div className="flex h-10 w-10 items-center justify-center rounded-full /20">
                <img
                  src={tickIcon}
                  alt="tick icon"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-slate-700">
              January 2026: Honeymoon season  book immediately
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            className="rounded-full bg-gradient-to-r from-[#edc528] to-[#edc528] px-8 sm:px-14 py-3 sm:py-4 text-xs sm:text-xl font-semibold uppercase tracking-wide text-white hover:scale-[1.02] active:scale-[0.97] transition-transform BM "
          >
            RESERVE YOUR ANDAMAN PARTY TICKET
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-4xl mx-auto italic font-inter"> 
         Join couples and adventurers raving about our 5-star coral voyage; just 9 bookings remain for this weekend.
        </p>

      </div>
    </section>
  );
}
