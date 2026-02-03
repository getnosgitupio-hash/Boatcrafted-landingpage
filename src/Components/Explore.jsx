import CTAButton from "./Cta.jsx";

import feature1 from "../Container.png";
import feature2 from "../Container-1.png";
import feature3 from "../Container-2.png";
import feature4 from "../Container-3.png";
import feature5 from "../Container-4.png";
import feature6 from "../Container-5.png";

export default function AndamanExplorersSection({
  ctaText = "Claim Your Underwater Explorer Seat Now",
  onCtaClick = () => {
    document.getElementById("payment").scrollIntoView({ behavior: "smooth" });
  },
}) {
  const features = [
    {
      img: feature1,
      title: "See The Coral, Not The Chaos",
      desc: "glass-window semi-submarine reveals untouched marine life few ever witness from Semi-Submarinevantage points.",
    },
    {
      img: feature2,
      title: "Party Under Golden Skies",
      desc: "Sunset DJ, curated music, open-deck vibes - this isn’t just a cruise, it’s a celebration on the ocean.",
    },
    {
      img: feature3,
      title: "Adventure Without Worry",
      desc: "Certified scuba and kayak instructors keep you safe and confident throughout your Semi-Submarine journey.",
    },
    {
      img: feature4,
      title: "Professional Photography",
      desc: "Enjoy every moment. We capture your scuba shots, kayaking moments, and on-deck photos so you never miss the magic.",
    },
    {
      img: feature5,
      title: "Small Crew, Big Connection",
      desc: "Only 80 guests per cruise to maintain exclusivity and ensure a comfortable, unrushed semi-submarine experience.",
    },
    {
      img: feature6,
      title: "Transparent Pricing",
      desc: "Coral Lunch Package ₹3,499 · Golden Sunset Adventure ₹5,499 · Ultimate Sunset Scuba Experience ₹5,999. All inclusive, no hidden fees.",
    },
  ];

  return (
    <section className="py-0 lg:py-10 bg-gradient-to-b from-white to-teal-50 text-center font-inter">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-xl sm:text-[3rem] leading-[27px] lg:leading-[55px] font-black text-gray-900 mx-auto mb-6">
          HERE'S WHAT MAKES ANDAMAN <br /> EXPLORERS DIFFERENT
        </h2>

        <p className="text-gray-800 max-w-3xl mx-auto mb-6 text-sm sm:text-xl text-slate-700">
         Our semi-submarine is engineered for travellers who demand more whether you're a couple seeking romance, a family looking for a memorable day out, a friend group chasing adventure, or a solo explorer craving connection.
        </p>
        <p className="text-gray-800 max-w-3xl mx-auto mb-10 text-sm sm:text-xl  text-slate-700">
          We've partnered with seasoned marine guides, professional photographers, and hospitality experts to craft a curated Havelock experience where you:
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((item, i) => (
            <div
              key={i}
              className="shadow-[0_8px_28px_rgba(0,180,200,0.18)]
hover:shadow-[0_8px_28px_rgba(0,180,200,0.18)] bg-white border-2 border-[#C7F1EC] shadow-sm hover:shadow-md p-6 pl-4 pb-6  pr-8 rounded-2xl transition flex flex-col gap-4 text-left min-h-[200px]"
            >
              <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />

              <div>
                <h3 className="font-semibold text-xl text-gray-800 mt-6 mb-6 leading-tight line-clamp-2 bin">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 mb-6 font-inter BM">
          Every detail, from transparent pricing to personalised service, is designed to eliminate uncertainty.
          <br className="" />
          <span className="text-teal-600 font-medium font-inter pt-10 lg:pt-16 BM">
            This is <b>your Semi-Submarine adventure, </b>not a cookie-cutter tourist package.
          </span>
        </p>

        {/* 🔥 CTA BUTTON — same pattern as HavelockHero */}
        <div className="mt-12 flex justify-center  ">
          <CTAButton text={ctaText} onClick={onCtaClick} />
        </div>

        <p className="text-sm sm:text-sm text-gray-500 italic mt-6 italic BM ">
Experience India's only semi-submarine journey, recognised as a must-do by travel editors.
        </p>
      </div>
    </section>
  );
}
