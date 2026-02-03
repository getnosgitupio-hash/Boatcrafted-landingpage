import React from "react";
import CTAButton from "./Cta";

import step1Icon from "../package.png";
import step2Icon from "../lo.png";
import step3Icon from "../ship.png";
import step4Icon from "../d.png";

import num1Img from "../11.png";
import num2Img from "../12.png";
import num3Img from "../13.png";
import num4Img from "../14.png";

function StepCard({ numberImage, title, body, icon }) {
  return (
    <div className="relative rounded-3xl bg-[#ECFEFF] shadow-[0_18px_60px_rgba(0,0,0,0.06)] px-6 py-8 sm:px-8 sm:py-10 min-h-auto">

      {/* Number Badge */}
      <div className="absolute -top-5 left-6 flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl text-xs font-semibold text-white">
          <img
            src={numberImage}
            alt="Step number"
            className="h-24 w-26 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6 lg:mt-2">

        {/* ICON AT BEGINNING OF HEADING */}
        <div className="flex items-center gap-3">
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-7 w-7 rounded-full object-contain"
          />

          <h3 className="text-sm sm:text-base font-semibold text-slate-900 bin">
            {title}
          </h3>
        </div>

        {/* Body */}
        <p className="text-xs sm:text-base leading-relaxed text-slate-700 whitespace-pre-line bin">
          {body}
        </p>
      </div>
    </div>
  );
}


export default function HowItWorksSection() {
  return (
    <section className="px-4 py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <header className="text-center max-w-6xl mx-auto">
          <h2 className="text-[20px] sm:text-[26px] md:text-[40px] leading-tight font-bold text-slate-900 uppercase font-bold leading-snug">
            How It Works - Simple, Clear, And Trusted By 50,000+ Travelers
          </h2>
          <p className="mt-4 lg:mt-10 text-sm sm:text-base">
            Booking your semi-submarine seat now. It's quick and transparent. No agents, no confusion, no hidden fees.
          </p>
        </header>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <StepCard
            numberImage={num1Img}
            icon={step1Icon}
            title="Select Your Package & Date"
            body={`Choose your ideal semi-submarine seat: Coral Lunch Package (₹3,499), Sunset Splash Package (₹4,499), Golden Sunset Adventure (₹5,499), or Ultimate Sunset Scuba Experience (₹5,999).\n\nPay securely online and receive instant booking confirmation for all details.`}
          />

          <StepCard
            numberImage={num2Img}
            icon={step2Icon}
            title="Get a Personal Call From Our Crew Team"
            body={`Once your booking is confirmed, our team reaches out to you directly to understand your needs: dietary preferences, celebrations, special instructions, or add-ons like couple photography or champagne setups.\n\nEverything is handled before your journey so you can just show up and enjoy.`}
          />

          <StepCard
            numberImage={num3Img}
            icon={step3Icon}
            title="Arrive, Board & Experience the Magic"
            body={`You’ll explore vibrant coral through the semi-submarine, go kayaking on gentle waters, enjoy music on deck, and dine with your fellow travelers.`}
          />

          <StepCard
            numberImage={num4Img}
            icon={step4Icon}
            title="Take Home Memories That Last"
            body={`After the semi-submarine experience, you’ll receive your professional photos and videos, along with memories that go far beyond a typical tourist experience.`}
          />
        </div>

        {/* CTA BUTTON SECTION (Updated with Gradient Button) */}
        <div className="mt-12 flex flex-col">
  <div className="flex justify-center">
    <CTAButton />
  </div>

  <p className="text-[11px] sm:text-base text-slate-800 max-w-2xl BM italic mt-4 text-center mx-auto">
    Already 1000+ Happy Adventurers | Limited to 80 guests per voyage| Dates fill 2-3 weeks ahead.
  </p>
</div>


      </div>
    </section>
  );
}
