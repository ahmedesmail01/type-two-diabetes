"use client";

import React from "react";
// import cardTriangles from "@/public/images/card-triangles.svg";
import Image from "next/image";
// import logo from "@/public/images/logo.svg";
import leftCard from "@/public/images/why-left.svg";
import rightCard from "@/public/images/why-right.svg";

//01007356961
const WhySec = () => {
  const items = [
    {
      title: "فهم علاقة الجسد والمشاعر",
      desc: "رؤية واضحة لعلاقة مشاعرك والمرض، مما يساعدك على فهم السبب الجذري الشعوري للمرض",
    },
    {
      title: "استعادة القدرة الفطرية على الشفاء",
      desc: "لتتعلم  إدارة ذاتك ومشاعرك بفعالية،عند ادارتك لذاتك و مشاعرك بفاعلية تتحسن حالتك الصحية  مع كل تحسن في إدارتك الشعورية  مما يعزز تحسن حالتك الصحية تدريجيًا التحرر من حال انا لست مفعولا به , انا من ذهبت الى المرض , انا من اذهب الى الشفاء",
    },
  ];
  return (
    <div className=" relative w-full flex flex-col gap-4 overflow-hidden justify-center items-center px-4 mb-[60px] lg:mb-[96px]">
      
      <h1 className="self-stretch text-[#000000] text-center [font-family:--font-cairo] text-2xl lg:text-[40px] font-bold leading-[160%] lg:mb-[48px]">
        لماذا جلسات &quot;الاتزان شفاء&quot;؟
      </h1>

      <div
        dir="rtl"
        className="flex flex-col lg:flex-row gap-4 justify-between"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-transparent p-4 z-50 w-[300px] md:w-[350px] h-[448px] flex flex-col gap-4  border border-yellow-700 rounded-lg overflow-hidden"
          >
            <Image
              src={index === 0 ? rightCard : leftCard}
              alt="shape"
              className="w-full "
            />
            <h1 className="text-[#353535] [font-family:--font-monadi]  text-lg font-normal ">
              {item.title}
            </h1>
            <p className="text-[#353535] font-semibold  w-full [font-family:--font-cairo] ">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySec;
