import React from "react";

export default function CTAButton({
  text = "Grab Your Exclusive Submersible Spot",
  onClick = () => {},
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={() => {
  document.getElementById("payment").scrollIntoView({ behavior: "smooth" });
}}
      className={
        "relative inline-flex items-center justify-center font-Nicky-regular " +
        "rounded-full w-full sm:w-auto " +
        // Gradient
        "bg-gradient-to-r from-[#edc528] to-[#edc528] " +
        // Padding
        "px-4 py-4 " +
        // Text
        "text-white font-semibold tracking-wide  text-[11px] sm:text-xl " +
        // Hover & active (also slightly enhanced shadow on hover)
        "transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] " +
        className
      }
    >
      {text}
    </button>
  );
}
