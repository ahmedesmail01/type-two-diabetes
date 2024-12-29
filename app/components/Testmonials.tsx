import Image from "next/image";
import React from "react";
import frame from "@/public/images/Frame 26.svg";

const Testmonials = () => {
  return (
    <div className="text-center flex-col w-full items-center pb-[60px] lg:pb-[96px]  ">
      <h1 className="  [font-family:--font-monadi] text-[#4e2a84] text-[40px] md:mb-[48px]  leading-[normal]">
        أراء العملاء
      </h1>
      <div className=" flex items-center justify-center">
        <Image src={frame} alt="frame" className="lg:w-[263px]" />
        <Image
          src={frame}
          alt="frame"
          className="hidden lg:block lg:w-[542px]"
        />
        <Image
          src={frame}
          alt="frame"
          className="hidden lg:block lg:w-[263px]"
        />
      </div>
    </div>
  );
};

export default Testmonials;
