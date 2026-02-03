import React from "react";

// ===== IMPORT ALL 52 IMAGES =====
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";
import img5 from "../img5.jpg";
import img6 from "../img6.jpg";
import img7 from "../img7.jpg";
import img8 from "../img8.jpg";
import img9 from "../img9.jpg";
import img10 from "../img10.jpg";
import img11 from "../img11.jpg";
import img12 from "../img12.jpg";
import img13 from "../img13.JPG";
import img14 from "../img14.JPG";
import img15 from "../img15.JPG";
import img16 from "../img16.JPG";
import img17 from "../img17.JPG";
import img18 from "../img18.JPG";
import img19 from "../img19.JPG";
import img20 from "../img20.JPG";
import img21 from "../img21.JPG";
import img22 from "../img22.JPG";
import img23 from "../img23.JPG";
import img24 from "../img24.JPG";
import img25 from "../img25.JPG";
import img26 from "../img26.JPG";

import img27 from "../img27.JPG";
import img28 from "../img28.JPG";
import img29 from "../img29.JPG";
import img30 from "../img30.JPG";
import img31 from "../img31.JPG";
import img32 from "../img32.JPG";
import img33 from "../img33.JPG";
import img34 from "../img34.JPG";
import img35 from "../img35.JPG";
import img36 from "../img36.JPG";
import img37 from "../img37.JPG";
import img38 from "../img38.JPG";
import img39 from "../img39.JPG";
import img40 from "../img40.JPG";
import img41 from "../img41.JPG";
import img42 from "../img42.JPG";
import img43 from "../img43.JPG";
import img44 from "../img44.JPG";
import img45 from "../img45.JPG";
import img46 from "../img46.JPG";
import img47 from "../img47.JPG";
import img48 from "../img48.JPG";
import img49 from "../img49.JPG";
import img50 from "../img50.png";
import img51 from "../img51.jpg";
import img52 from "../img52.png";

export default function TwoRowImageSlider() {
  const row1Images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26,
  ];

  const row2Images = [
    img27, img28, img29, img30, img31, img32, img33, img34, img35, img36,
    img37, img38, img39, img40, img41, img42, img43, img44, img45, img46,
    img47, img48, img49, img50, img51, img52,
  ];

  return (
    <section className="w-full py-8 md:py-20 bg-[#afe8ee] mb-0 md:mb-16">
      {/* ROW 1 */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-slide-left whitespace-nowrap">
          {[...row1Images, ...row1Images].map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              className="h-40 w-auto rounded-xl object-cover flex-none"
            />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="overflow-hidden mt-10">
        <div className="flex gap-6 animate-slide-right whitespace-nowrap">
          {[...row2Images, ...row2Images].map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              className="h-40 w-auto rounded-xl object-cover flex-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
