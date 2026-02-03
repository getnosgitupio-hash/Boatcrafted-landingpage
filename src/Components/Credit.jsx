import React from "react";
import CTAButton from "./Cta";
import yourTickIcon from "../ol.png";

// Replace with your real image
import founderImg from "../lp.JPG";

function CredentialItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-xs  md:text-[17px] leading-tight text-slate-700">
      <div className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center ">
  <img
    src={yourTickIcon}   // ← replace with your imported image
    alt="tick icon"
    className="h-10 w-10 object-contain"
  />
</div>

      <span>{children}</span>
    </li>
  );
}

export default function WhoWeAreSection() {
  return (
    <section className="bg-gradient-to-b from-[#F3FBFF] to-white px-4 py- sm:py-16 md:py-6">
      <div className="mx-auto max-w-6xl rounded-[32px]  px-4 py-8 sm:px-8 sm:py-10">
        {/* Heading */}
        <header className="text-center">
          <h2 className="text-[28px] sm:text-[26px] md:text-[42px] font-extrabold text-slate-900 uppercase leading-snug">
            Who We Are And Why We Built
            <span className="block">This Differently</span>
          </h2>
        </header>

        {/* Image */}
        <div className="mt-8 sm:mt-0 flex justify-center">
          <div className=" max-w-7xl overflow-hidden rounded-3xl">
            <img
              src={founderImg}
              alt="Semi-submarine and Semi-Submarineview"
              className=" h-full object-cover"
            />
          </div>
        </div>

        {/* Story text */}
        <div className="mt-6 sm:mt-10 text-center md:text-left">
          <p className=" font-bold bin text-sm sm:text-base md:text-xl leading-relaxed text-slate-700 max-w-7xl pl-0 lg:pl-[8rem] text-[#00786F]">
With 27 years of marine experience, we deliver authentic, ethical semi-submarine and adventure experiences. Partnering with expert marine guides and professional photographers, we ensure mindful coral viewing and beautifully captured moments. Limited to 80 guests, you’re valued whether celebrating love, friendship, adventure, or ocean connection.          </p>
          
        </div>

        {/* Credentials card */}
        <div className="mt-10 sm:mt-6 rounded-3xl bg-gradient-to-b from-[#E9FBFD] to-white shadow-[0_20px_70px_rgba(0,0,0,0.10)] px-4 py-7 sm:px-8 sm:py-8">
          <h3 className="text-center text-sm sm:text-3xl font-semibold text-slate-900 mb-6 ">
            Our Credentials:
          </h3>

          <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 font-inter">
            <CredentialItem>
             27 Years of Marine & Adventure Experience
            </CredentialItem>
            <CredentialItem>
              50,000+ Happy Travellers (Couples, Families, Groups, Solo)
            </CredentialItem>
            <CredentialItem>
India’s Only Elite Semi-Submarine Experience            </CredentialItem>
            <CredentialItem>
Professional Photography & Guest Curation Team
            </CredentialItem>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          

          <CTAButton
            text="Dive In With 27 Years’ Trusted Adventure"
            className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-[11px] sm:text-xs md:text-xl BM"
          />

          <p className="text-[10px] sm:text-xs md:text-base text-slate-800 text-center max-w-3xl mt-1 italic BM">
         Trusted by India’s top adventurers, seats are disappearing fast.
          </p>
        </div>
      </div>
    </section>
  );
}
