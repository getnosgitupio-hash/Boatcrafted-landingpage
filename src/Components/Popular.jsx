import React from "react";
import CTAButton from "./Cta";

// top icons
import groupsIcon from "../couple.png";
import soloIcon from "../heart.png";

// bullet icons
import bullet1 from "../bullet1.png";
import bullet2 from "../bullet2.png";
import bullet3 from "../bullet3.png";
import bullet4 from "../bullet4.png";
import bullet5 from "../bullet5.png";
import bullet6 from "../bullet6.png";

// ⭐ NEW — background image
import bgImage from "../squar-goals.jpg";

function Bullet({ icon, children }) {
  return (
    <li className="flex gap-4 text-sm sm:text-[17px] leading-tight text-slate-700">
      <img
        src={icon}
        alt="bullet icon"
        className="w-5 h-5 object-contain mt-[3px]"
      />
      <span>{children}</span>
    </li>
  );
}

export default function SquadSoloSection() {
  return (
    <section
      className="px-4 py-4 sm:py-16 pb-10 lg:pb-10 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <header className="text-center max-w-5xl mx-auto">
          <h2 className="text-[22px] text-white font-bold sm:text-[28px] md:text-[42px] text-slate-900 uppercase font-inter leading-tight">
            From Squad Goals To Solo Escapes, <br className="hidden sm:block" />
            YOUR ANDAMAN GETAWAY STARTS HERE
          </h2>
          <p className="mt-3 lg:mt-10 text-sm sm:text-base text-slate-200 max-w-6xl font-inter">
            Whether you're celebrating friendship, chasing adventure, or discovering yourself, <br className="hidden sm:block" />
            this semi-submarine is built for every kind of traveler.
          </p>
        </header>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-6xl">

          {/* GROUPS CARD */}
          <div className="rounded-3xl bg-[#FFF7EA] shadow-[0_18px_60px_rgba(0,0,0,0.10)] px-6 py-7 sm:px-10 sm:py-8 flex flex-col gap-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden">
              <img
                src={groupsIcon}
                alt="groups icon"
                className="h-24 w-32 object-contain"
              />
            </div>

            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-xl font-semibold text-slate-900 bin">
                For Groups:
              </h3>
            </div>

            <ul className="space-y-6 font-inter">
              <Bullet icon={bullet1}>
                Celebrate birthdays, reunions, or just life with your favorite
                people under a golden sunset from the semi-submarine.
              </Bullet>

              <Bullet icon={bullet2}>
                Enjoy group seating, curated playlists, and onboard photographers
                who capture every moment of your semi-submarine exploration.
              </Bullet>

              <Bullet icon={bullet3}>
                Private celebration requests? Our crew customises everything -
                music, cake, and champagne for your experience.
              </Bullet>
            </ul>

            <div className="mt-3 rounded-2xl border-[2px] border-[#F4D8A1] bg-white/70 px-4 py-4 text-sm leading-relaxed text-slate-700 max-w-3xl">
              <p className="italic">
                "I went with my college friends for a reunion, loved the music
                and the views from the semi-submarine! Everything was perfect.
                We already planned our next one."
              </p>
              <p className="mt-2 text-base font-semibold text-slate-600 BM">
                - Ravi & Squad, Chennai
              </p>
            </div>
          </div>

          {/* SOLO CARD */}
          <div className="rounded-3xl bg-[#E6FFF6] shadow-[0_18px_60px_rgba(0,0,0,0.10)] px-6 py-7 sm:px-8 sm:py-8 flex flex-col gap-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden">
              <img
                src={soloIcon}
                alt="solo icon"
                className="h-24 w-34 object-contain"
              />
            </div>

            <div className="flex items-center gap-3">
              <h3 className="text-base sm:text-xl font-semibold text-slate-900 bin">
                For Solo Travellers:
              </h3>
            </div>

            <ul className="space-y-6 font-inter">
              <Bullet icon={bullet4}>
                A safe, warm space where you can relax, explore, and connect
                naturally during your semi-submarine cruise.
              </Bullet>

              <Bullet icon={bullet5}>
                Our team ensures you are looked after and feel part of the
                semi-submarine experience from the first hello.
              </Bullet>

              <Bullet icon={bullet6}>
                Many solo travelers leave with new friendships formed during the
                journey and plenty of shared memories.
              </Bullet>
            </ul>

            <div className="mt-3 rounded-2xl border-[2px] border-[#A2EFD0] bg-white/70 px-4 py-4 text-sm leading-relaxed text-slate-700">
              <p className="italic">
                "I traveled solo for the first time! I met people who made the
                semi-submarine trip unforgettable. All thanks to Andaman Explorers..."
              </p>
              <p className="mt-2 text-base font-semibold text-slate-600 BM">
                - Ananya, Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <CTAButton
            text="Don’t Miss India’s Top Underwater Journey"
            className="px-2 md:px-14 py-4 BM"
          />

          <p className="BM text-xs sm:text-base text-slate-100 text-center max-w-2xl font-inter italic mt-4">
Underwater Semi-Submarine Closing Fast | Group bookings accepted until spots fill.
          </p>
        </div>

      </div>
    </section>
  );
}
