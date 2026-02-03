export default function Footer() {
  return (
    <footer className="bg-black text-center py-6 relative">
      {/* Top Blue Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#0077FF]" />

      {/* Footer Text */}
      <p className="text-white text-xs sm:text-sm opacity-80">
        © 2025. All Rights Reserved.
      </p>
    </footer>
  );
}
