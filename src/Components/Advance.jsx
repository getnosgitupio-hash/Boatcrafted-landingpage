import React, { useEffect, useState } from "react";
import CTAButton from "./Cta";

// Slider images
import groupImg1 from "../Circle 1.jpg";
import groupImg2 from "../Circle 2.JPG";
import groupImg3 from "../Circle 3.JPG";

// 3 icon images
import iconConnections from "../mk.png";
import iconAdventures from "../nd.png";
import iconMemories from "../Icon-1.png";

const sliderImages = [groupImg1, groupImg2, groupImg3 

];

export default function CircleOfAdventurersSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-[#F3FBFF] to-white px-4 py-10 sm:py-20">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-start">

          {/* LEFT SLIDER SECTION */}
          <div className="flex justify-center md:justify-center">
            <div className="relative rounded-2xl overflow-hidden max-w-md w-full h-[612px]">

              {/* Slider track */}
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {sliderImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    className="w-full h-[612px] flex-shrink-0 object-cover object-center"
                    alt=""
                  />
                ))}
              </div>

              {/* COLOR OVERLAY */}
              <div
                className="pointer-events-none absolute -bottom-10 inset-x-0 h-32 
                bg-gradient-to-t from-[#00D4C0]/60 via-[#FF7E7E]/40 to-transparent 
                blur-2xl opacity-95"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="max-w-xl">

            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] leading-[35px] font-bold text-slate-900 uppercase">
              You&apos;ll Form A Circle <br className="hidden sm:block" />
              Of Like-Minded <br className="hidden sm:block" />
              Adventurers
            </h2>

            <p className="mt-4 text-sm sm:text-xl leading-relaxed text-slate-700">
              In a small space with only 80 people, our semi-submarine experience brings
              together daring tourists. Instead of attracting crowds, this carefully planned
              excursion cultivates real connections.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#EBFFFA] px-10 py-5 w-[160px]">
                <img src={iconConnections} className="h-10 w-10 mb-2" />
                <p className="text-xs md:text-base font-medium text-slate-700 text-center">
                  Authentic<br />Connections
                </p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#E8FCFF] px-10 py-5 w-[160px]">
                <img src={iconAdventures} className="h-10 w-10 mb-2" />
                <p className="text-xs md:text-base font-medium text-slate-700 text-center">
                  Shared<br />Adventures
                </p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F5EDFF] px-10 py-5 w-[160px]">
                <img src={iconMemories} className="h-10 w-10 mb-2" />
                <p className="text-xs md:text-base font-medium text-slate-700 text-center">
                  Lasting<br />Memories
                </p>
              </div>

            </div>

            <div className="mt-10 flex flex-col items-center gap-3">
              <CTABtn
                text="BOOK BEFORE SEMI SUBMARINE SEATS SELL OUT"
                className="px-14 py-4 BM"
              />

              <p className="text-xs sm:text-base text-slate-800 max-w-xl italic font-inter mt-4">
                Limited to 80 guests per cruise | Reserve now!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CTABtn(props) {
  return <CTAButton {...props} />;
}
