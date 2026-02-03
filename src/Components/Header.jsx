import { Users, Star, Anchor } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#0096A0] to-[#0084B8] text-white text-sm sm:text-base py-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 BM">
        {/* Item 1 */}
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>Only 80 Explorers per Cruise</span>
        </div>

        {/* Divider */}
        <span className="hidden sm:block h-4 w-px bg-white/40"></span>

        {/* Item 2 */}
        <div className="flex items-center gap-2">
          <Star size={16} className="text-yellow-400" />
          <span>Rated 4.9/5 by 50000+ Travelers</span>
        </div>

        {/* Divider */}
        <span className="hidden sm:block h-4 w-px bg-white/40"></span>

        {/* Item 3 */}
        <div className="flex items-center gap-2">
          <Anchor size={16} />
          <span> India's Only Semi-Submarine Experience</span>
        </div>
      </div>
    </div>
  );
}
