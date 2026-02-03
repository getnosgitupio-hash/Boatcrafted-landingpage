import React from "react";
import CTAButton from "./Cta";

// Import your images here 
import shieldIcon from "../r4.png";
import tickIcon from "../r3.png";
import starImg from "../r2.png";     // image for “Happy Travelers”
import boatImg from "../r1.png";     // image for “80 Guests”


function GuaranteeBullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
      <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center ">
        <img
          src={tickIcon}
          alt="tick icon"
          className="h-5.5 w-5.5 object-contain"
        />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function SatisfactionGuaranteeSection() {
  return (
    <section className="px-4 py-16 sm:py-10 bg-white">
      <div className="mx-auto max-w-6xl">
        
        {/* Outer Card */}
        <div className="relative rounded-[32px] bg-[#FFEFEA] shadow-[0_24px_80px_rgba(0,0,0,0.06)] px-4 py-10 sm:px-6 sm:py-12 flex flex-col items-center">

          {/* Top Shield Badge */}
          <div className="absolute -top-10 flex items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center ">
              <img
  src={shieldIcon}
  alt="Guarantee Shield"
  className="w-full h-full"
/>

            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-center text-[20px] sm:text-[26px] md:text-[40px] font-bold text-slate-900 uppercase">
            100% Satisfaction Guaranteed
          </h2>

          {/* White inner card */}
          <div className="mt-8 w-full max-w-4xl rounded-3xl bg-white shadow-[0_22px_70px_rgba(0,0,0,0.15)] px-6 py-8 sm:px-8 sm:py-9 font-inter">
            <ul className="space-y-4">

              <GuaranteeBullet>
Enjoy unforgettable coral viewing, sunset celebrations, warm hospitality, professional photography, and seamless coordination throughout your semi-submarine cruise. If you’re not satisfied, we’ll refund you 100% - no questions asked.              </GuaranteeBullet>

              <GuaranteeBullet>
Your safety is our top priority, overseen by certified instructors and strict protocols for scuba, kayaking, and boarding.
              </GuaranteeBullet>

              <GuaranteeBullet>
Weather cancellations are fully refundable, and our guest relations team is always available to resolve any concerns and ensure a perfect experience.              </GuaranteeBullet>

            </ul>

            {/* CTA */}
           <div className="mt-8">
  {/* CTA stays original width */}
  <div className="flex justify-center">
    <CTAButton
      text="Book Your Semi-Submarine Adventure Today"
      className="px-10 py-4 text-[11px] sm:text-base text-center"
    />
  </div>

  {/* Text below CTA */}
  <p className="text-[11px] sm:text-base text-slate-800 max-w-2xl BM italic mt-4 text-center mx-auto">
    Trusted by 1,000+ Happy Travelers | Limited to 80 Guests Per Semi-Submarine Voyage
  </p>
</div>

          </div>

          {/* Bottom Meta Icons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] sm:text-xs text-slate-600">

            {/* Left: Star + Happy Travelers */}
            <div className="flex items-center gap-2">
              <img
                src={starImg}
                alt="happy travelers"
                className="h-4 w-4 object-contain"
              />
              <span className="font-medium font-inter text-[14px]">
                Trusted by 50,000+ Happy Travelers
              </span>
            </div>

            {/* Dot separator */}
            <span className="hidden sm:inline-block text-slate-400">•</span>

            {/* Right: Boat + 80 Guests */}
            <div className="flex items-center gap-2">
              <img
                src={boatImg}
                alt="semi submarine capacity"
                className="h-4 w-4 object-contain"
              />
              <span className="font-medium font-inter text-[11px] md:text-[14px]">
                Limited to 80 Guests Per Semi-Submarine Cruise
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
