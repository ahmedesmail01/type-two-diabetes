import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import estroLogo from "@/public/images/estro-logo.svg";
import thyroidLogo from "@/public/images/thyroid-logo.svg";
import diabeticLogo from "@/public/images/diabetic-logo.svg";
import diabeticLogoOne from "@/public/images/diabetic-logo-1.svg";
import msLogo from "@/public/images/ms-logo.svg";
import fitraLogo from "@/public/images/fittra-logo.svg";

const logos = [
  { src: estroLogo, alt: "Estro Logo" },
  { src: thyroidLogo, alt: "Thyroid Logo" },
  { src: diabeticLogo, alt: "Diabetic Logo" },
  { src: diabeticLogoOne, alt: "Diabetic Logo Variant" },
  { src: msLogo, alt: "MS Logo" },
  { src: fitraLogo, alt: "Fitra Logo" },
];

const Marq = () => {
  return (
    <div className=" w-full max-w-screen z-40 mx-auto flex flex-col items-center justify-center overflow-hidden mb-[70px] lg:mb-[140px]">
      <h1 className="text-center mb-[40px] text-gray-600 [font-family:--font-monadi] text-[14px]  font-normal leading-7 opacity-80">
        Presented by DR. Ahmed AlDemlawy the Creator of
      </h1>
      <div className="relative w-full">
        <Marquee
          pauseOnHover={true}
          gradient={true}
          gradientColor="#ffffff"
          speed={50}
        >
          <div className="flex items-center gap-10 lg:gap-[96px]">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-[2px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={105}
                  objectFit="contain"
                  className="w-[80px] lg:w-auto"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marq;
