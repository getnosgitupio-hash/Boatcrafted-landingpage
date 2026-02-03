import React from "react";

const packages = [
  {
    name: "Coral Lunch Package",
    tag: "Most Popular",
    highlightBox:
      "Lunch + Coral Viewing + Professional Photography + Kayaking + Pick & Drop + Drinks =",
    price: "₹3,999",
    originalPrice: "₹9,500/-",
    subtitle: "per person",
    bestFor: "Early explorers, families",
    bullets: [
      "Semi-submarine experience",
      "Lunch buffet included",
      "Professional photography",
      "Kayaking adventure",
      "2–3 hour duration",
    ],
  },
  {
    name: "Sunset + Dinner Cruise Package",
    tag: "Best Seller",
    highlightBox:
      "Sunset + Dinner + Kayaking + Photography + DJ + Bar + Pick & Drop =",
    price: "₹5,999",
    originalPrice: "₹14,000/-",
    subtitle: "per person",
    bestFor: "Adventures, honeymooners",
    bullets: [
      "Certified kayaking experience",
      "Kayaking adventure",
      "Gourmet buffet dinner",
      "Sunset celebration",
      "DJ and dance floor",
      "5–6 hour duration",
    ],
  },
  {
    name: "Candle Light Dinner",
    tag: "Premium Experience",
    highlightBox:
      "Special Décor + Semi-Submarine + Champagne Toast + Unlimited Drinks + Photography + Private Table + Butler + Pick & Drop + DJ =",
    price: "₹11,999",
    originalPrice: "₹18,000",
    subtitle: "per couple",
    bestFor: "Honeymooners, celebrations",
    bullets: [
      "Private semi-submarine setup",
      "Custom décor & music",
      "Champagne sunset toast",
      "Romantic photography",
      "Dedicated service team",
      "5–6 hour duration",
    ],
  },
  {
    name: "Lunch with Corals + Watersports Package",
    tag: "Adventure Combo",
    highlightBox:
      "Lunch + Corals + Photography + Boat Ride + Jetski + Banana Ride + Parasailing =",
    price: "₹6,500",
    originalPrice: "₹11,100",
    subtitle: "per person",
    bestFor: "Early explorers, family groups",
    bullets: [
      "Semi-submarine coral viewing",
      "Lunch buffet included",
      "Professional photography",
      "Jetski, banana ride & parasailing",
      "2–3 hour duration",
    ],
  },
  {
    name: "Lunch with Scuba",
    tag: "Top Rated",
    highlightBox:
      "Lunch + Scuba Diving + Photography + DJ + Pick & Drop =",
    price: "₹6,999",
    originalPrice: "₹11,500",
    subtitle: "per person",
    bestFor: "Adventure seekers",
    bullets: [
      "Certified scuba diving experience",
      "Professional underwater photography",
      "DJ and dance floor",
      "2–3 hour duration",
    ],
  },
];


// CTA BUTTONS
const ctaLabels = [
  "Claim Your Spot",
  "Book Instantly",
  "Reserve Now",
  "Dive In Fast",
  "Secure Your Table",
];

const ctaSubtexts = [
  "Only 9 Seats Left",
  "Just 14 Slots Available",
  "11 Seats Remaining",
  "6 Exclusive Seats Open",
  "Only 2 Private Tables Left",
];

const ctaLinks = [
  "https://rzp.io/rzp/coral-lunch",
  "https://rzp.io/rzp/sunset-splash",
  "https://rzp.io/rzp/golden-sunset",
  "https://rzp.io/rzp/ultimate-sunset-scuba",
  "https://rzp.io/rzp/honeymoon-private-table",
];

function PackageCard({ pkg, isFeatured, index }) {
  const getBorderColor = () => {
    if (pkg.tag === "Most Popular") return "border-2 border-[#00C7B5]";
    if (pkg.tag === "Top Pick") return "border-2 border-[#00C7B5]";
    if (pkg.tag === "Premium Experience") return "border-2 border-[#00C7B5]";
    return "border-slate-100";
  };

  return (
    <div
      className={
        "relative flex flex-col h-full rounded-[26px] bg-white px-5 py-6 sm:px-6 sm:py-7 shadow-[0_16px_50px_rgba(15,23,42,0.12)] " +
        (isFeatured
          ? "border-2 border-[#00C7B5] scale-[1.02] z-10"
          : "border " + getBorderColor())
      }
    >
      {pkg.tag && (
        <div
          className="absolute top-0 right-0 h-8 sm:h-9 flex items-center justify-center
                     bg-gradient-to-r from-[#00AFAF] to-[#0099D6]
                     px-4 sm:px-5 rounded-bl-[45px] rounded-tr-[26px]
                     text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em]
                     text-white shadow-[0_10px_28px_rgba(0,180,200,0.45)]"
        >
          {pkg.tag}
        </div>
      )}

      <h3 className="text-sm sm:text-xl font-semibold text-slate-900 mb-3">
        {pkg.name}
      </h3>

{/* HIGHLIGHT BOX WITH ZOOM ANIMATION */}
<div className="mb-4 rounded-2xl bg-[#E5FBF6] px-3 py-3 text-[11px] leading-snug 
                text-slate-800 h-[118px] overflow-hidden">
  <p className="mb-1 text-[11px] font-semibold uppercase">Highlights:</p>

  <p className="text-[12px] font-medium">
    {/* Main highlight text first */}
    <span className="font-semibold">
      {pkg.highlightBox}
    </span>

    {/* Original price at the END with strike */}
    <span className="line-through text-red-500 ml-2">
      {pkg.originalPrice}
    </span>
  </p>
</div>


      <div className="mb-4">
        <span className="text-xl sm:text-3xl font-bold text-[#008C7E] font-inter">
          {pkg.price}
        </span>
        <p className="text-[15px] text-slate-800 mt-2">{pkg.subtitle}</p>
      </div>

      <div className="mb-4 rounded-2xl bg-[#F7F1FF] px-3 py-3 text-[11px] text-slate-800">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
          Best For:
        </p>
        <p className="text-[14px]">{pkg.bestFor}</p>
      </div>

      <ul className="space-y-2 mb-5">
        {pkg.bullets.map((b, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-[11px] sm:text-[13px] text-slate-700"
          >
            <span className="mt-[2px] text-[#00C38A]">✔</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <div className="mt-auto text-center">
        <a
          href={ctaLinks[index]}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "block w-full rounded-full px-4 py-2.5 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.12em] text-center transition-all duration-300 " +

            // 3D Button Effect
            "active:scale-95 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] " +

            (isFeatured
              ? "bg-[#00AFAF] text-white shadow-[0_16px_40px_rgba(0,128,128,0.55)]"
              : "bg-[#020617] text-white hover:bg-black")
          }
        >
          {ctaLabels[index]}
        </a>

        {/* animated subtext */}
        <p className="text-[11px] sm:text-[12px] text-red-500  mt-2 animate-zoomPulse">
          {ctaSubtexts[index]}
        </p>
      </div>
    </div>
  );
}

export default function VoyagesPricingSection() {
  return (
    <section className="bg-white px-4 py-16 sm:py-0 sm:pb-20" id="payment">
      <div className="mx-auto max-w-8xl">
        <header className="text-center max-w-5xl mx-auto">
          <h2 className="text-[20px] sm:text-[26px] md:text-[44px] font-semibold text-slate-900 uppercase leading-snug">
            PICK YOUR PERFECT SEMI-SUBMARINE CRUISE - ALL INCLUSIVE, ZERO HIDDEN FEES
          </h2>
          <p className="mt-10 text-sm sm:text-base text-slate-600 leading-relaxed">
           Our semi-submarine is crafted for a different vibe, from relaxed coral viewing to adventure-packed scuba experiences. Transparent pricing, no hidden extras, just pure island magic.
          </p>
        </header>

        <div className="mt-20 grid gap-6 sm:gap-7 md:grid-cols-3 lg:grid-cols-5">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              index={index}
              isFeatured={index === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
