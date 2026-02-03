import { X } from "lucide-react";

export default function TouristTrapsSection() {
  return (
    <section className="py-10 lg:py-16 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-10 font-inter">
          TIRED OF GENERIC TOURIST TRAPS?
        </h2>

        <div className="space-y-4 text-left">
          <div className="flex items-start gap-4 border border-red-200 p-6 rounded-lg font-inter ">
            <X className="text-red-500 mt-1 w-5 h-5 flex-shrink-0" />
            <p className="text-gray-800">
              Sick of overcrowded party cruise where you're just another ticket number?
            </p>
          </div>

          <div className="flex items-start gap-4 border border-red-200 p-6 rounded-lg font-inter text-[16px] ">
            <X className="text-red-500 mt-1 w-5 h-5 flex-shrink-0" />
            <p className="text-gray-800">
              Frustrated by hidden costs, disappointing food, and Instagram photos that don't match reality?
            </p>
          </div>

          <div className="flex items-start gap-4 border border-red-200  p-6 rounded-lg font-inter">
            <X className="text-red-500 mt-1 w-5 h-5 flex-shrink-0" />
            <p className="text-gray-800">
              Worried about booking something online only to show up and regret it?
            </p>
          </div>
        </div>

        <p className="mt-8  text-gray-900 text-[16px]">
        You're not alone. Most cruises prioritize crowds over quality, not the kind of curated,<br className="hidden sm:block" /> experiential journey Andaman travelers actually want.
        </p>
      </div>
    </section>
  );
}
