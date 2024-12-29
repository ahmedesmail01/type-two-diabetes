import React from "react";
import insta from "@/public/images/instagram.svg";
import face from "@/public/images/Vector.svg";
import x from "@/public/images/new-twitter.svg";
import youtube from "@/public/images/youtube.svg";
import Image from "next/image";

const Footer = () => {
  const socials = [
    {
      logo: face,
      title: "Facebook",
    },
    {
      logo: insta,
      title: "Instagram",
    },
    {
      logo: x,
      title: "X",
    },
    {
      logo: youtube,
      title: "YouTube",
    },
  ];
  //
  return (
    <div className="flex w-full flex-col items-center justify-center ">
      <div className="flex flex-row-reverse items-center justify-center gap-4 lg:gap-[88px] mb-[64px]">
        {socials.map((social, index) => (
          <a
            key={index}
            href={"#"}
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Image src={social.logo} alt={social.title} />
            <span className="hidden lg:block text-[#4e2a84] ">
              {social.title}
            </span>
          </a>
        ))}
      </div>
      <p className="pb-8 text-sm lg:text-2xl">
        © 2024 All Rights Reserved - Mange The Now
      </p>
    </div>
  );
};

export default Footer;
