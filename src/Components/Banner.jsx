import React from "react";
import CTAButton from "./Cta.jsx";
import bgImage from "../banner.jpg";
import anchorIcon from "../grid.png";

export default function HavelockHero({
  capacityText = "Capacity: 80 Guests Only",
  ribbonText = "ATTENTION: ADVENTURE-SEEKERS, FRIEND GROUPS & COUPLES! YOUR ISLAND ESCAPE IS 100% GUARANTEED!",
  title = "DISCOVER INDIA'S ELITE\nSEMI-SUBMARINE CRUISE\nTOP TRAVELLERS CHOOSE!\nLIMITED SEATS • 4 SIGNATURE EXPERIENCES",
  subtitle =
    "Glide through turquoise waters in our glass-window semi-submarine, operated by a team with 27 years of marine experience. Watch vibrant coral gardens, soak in golden sunsets, enjoy kayaking on calm blue waters, and capture Instagram-worthy moments. Perfect for friends, couples, and solo explorers looking for a truly magical Andaman experience.",
  ctaText = "SECURE YOUR SEMI-SUBMARINE SPOT NOW",
  onCtaClick = () => {},
  // optional: override top stats if needed
  topStats = [
    "Only 80 Explorers per Cruise",
    "Rated 4.9/5 by 1000+ travellers",
    "India's only semi-submarine cruise experience",
  ],
}) {
  return (
    <section className="relative isolate overflow-hidden text-center">
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="Havelock semi-submarine cruise background"
          className="h-full w-full object-cover"
        />
        {/* Dark teal overlay */}
        <div className="absolute inset-0 bg-[#031923]/50" />
      </div>

      {/* 🔹 Top Teal Info Bar */}
      {/* <div className="w-full bg-[#00A9B9] bg-opacity-95 text-[10px] sm:text-xs text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-2">
          <TopStat icon="⛵" text={topStats[0]} />
          <TopStat icon="★" text={topStats[1]} />
          <TopStat icon="✨" text={topStats[2]} />
        </div>
      </div> */}

      {/* 🔹 Black Ribbon */}
      <div className="px-4 lg:px-0 pt-4 sm:pt-6">
  <div className="mx-auto flex max-w-[58rem] items-center justify-center rounded-full bg-black/60 px-4  py-1.5 text-[10px] sm:text-base uppercase tracking-wide text-white shadow-md BM-1">
    
    {/* 🔴 Blinking Red Dot */}
    <span className="mr-2 inline-block h-6 w-10 lg:h-6 lg:w-6 rounded-full bg-[#F43F5E] blink-dot" />

    <span className="">{ribbonText}</span>
  </div>
</div>


      {/* 🔹 Main Content */}
      <div className="mx-auto max-w-full px-4 py-12 sm:py-16 lg:py-10">
        {title.split("\n").map((line, i, arr) => {
  const isLast = i === arr.length - 1;

  return (
    <h1
      key={i}
      className={`BM-1 mb-1 
        ${isLast 
          ? "text-[14px] sm:text-[20px] md:text-[40px]"  // medium size
          : "text-[20px] sm:text-[38px] md:text-[66px]"  // original size
        }
        leading-[1.05] text-white 
        drop-shadow-[0_6px_18px_rgba(0,0,0,0.75)] 
        uppercase`}
    >
      {line}
    </h1>
  );
})}

        <p className="mx-auto mt-6 max-w-6xl text-xs sm:text-xl md:text-xl leading-relaxed text-white/90 BM">
          {subtitle}
        </p>

        {/* 🔹 Capacity Pill */}
        <div className="mt-7 flex justify-center">
  <div className="
    inline-flex items-center gap-2 
    rounded-xl 
    bg-[#C5F7F2]
    px-5 py-2 
    text-[12px] sm:text-sm 
    font-medium 
    text-[#0A3A3A]
    shadow-[0_8px_20px_rgba(0,0,0,0.15)]
  ">
    <img
      src={anchorIcon}
      alt="anchor icon"
      className="h-4 w-4 object-contain"
    />

    <span>{capacityText}</span>
  </div>
</div>

        {/* 🔹 CTA Button with glow */}
        <div className="mt-7 flex justify-center">
  <div className="relative">
    {/* Stronger glow behind button */}
    <div className="pointer-events-none absolute inset-x-[-40px] bottom-0 h-10 rounded-full" 
    />

    <CTAButton
      text={ctaText}
      onClick={onCtaClick}
      className="relative z-10 px-10 sm:px-14 py-3 sm:py-6 text-xs sm:text-xl 
                 font-semibold  tracking-wide BM"
    />
  </div>
</div>


        {/* 🔹 Footer Note */}
        <p className="mt-5 text-[10px] sm:text-base  text-white/85 italic BM">
         Step into India’s most exclusive semi-submarine spots and fill within 48 hours.
        </p>
      </div>
    </section>
  );
}

/* Small top bar item */
function TopStat({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm sm:text-base">{icon}</span>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}

function ShieldIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2c-.3 0-.6.06-.87.18l-6 2.57A2 2 0 0 0 4 7.6v4.14c0 2.98 1.6 5.76 4.2 7.29l2.82 1.67c.59.35 1.37.35 1.96 0l2.82-1.67A8.47 8.47 0 0 0 20 11.74V7.6a2 2 0 0 0-1.13-1.85l-6-2.57A2 2 0 0 0 12 2Z" />
      <path
        d="M10.5 12.75l-1.5-1.5-1.5 1.5 3 3 5-5-1.5-1.5-3.5 3.5Z"
        fill="#10B981"
      />
    </svg>
  );
}
