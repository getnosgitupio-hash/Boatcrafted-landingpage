import React, { useRef, useState } from "react";

// Import your actual videos
import video1 from "../video-1.mp4";
import video2 from "../video-2.mp4";
import video3 from "../video-3.mp4";
import video4 from "../video-4.mp4";

const videoList = [video1, video2, video3, video4];

export default function UnderwaterTestimonials() {
  const videoRefs = useRef([]);
  const [clicked, setClicked] = useState([false, false, false, false]); // Track which video was clicked

  const enableSound = (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.muted = !vid.muted;
      vid.play();

      // Hide text after click
      setClicked((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#E7FAFF] to-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-[22px] sm:text-[26px] md:text-[42px] font-extrabold tracking-wide text-slate-900 uppercase">
            Travelers Who&apos;ve Experienced
            <span className="block mt-1">The SEMI-SUBMARINE Magic</span>
          </h2>
        </header>

        {/* ==== 4 VIDEO GRID ==== */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {videoList.map((src, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden border border-[#CFE9F3] shadow-[0_18px_55px_rgba(15,23,42,0.10)] cursor-pointer group"
              onClick={() => enableSound(idx)}
            >
              {/* Hover Text */}
              {!clicked[idx] && (
                <div
                  className="
                    absolute inset-0 bg-black/40
                    text-white text-lg font-medium
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                  "
                >
                  Click for sound 🔊
                </div>
              )}

              {/* Video */}
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#edc528] to-[#edc528] px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-xl font-semibold tracking-wide uppercase text-white hover:scale-[1.02] active:scale-[0.98] transition-transform BM"
          >
            Reserve Your Underwater Adventure Today
          </button>

          <p className="text-[11px] sm:text-base text-slate-600 text-center italic max-w-4xl mt-2 font-inter italic mt-4">
            Already 1000+ Happy Adventurers | Limited to 80 guests per voyage|Dates fill 2-3 weeks ahead.</p>
        </div>
      </div>
    </section>
  );
}
