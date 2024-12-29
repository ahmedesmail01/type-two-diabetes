import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo-lab.svg";
import cardPhotoMob from "@/public/images/card-photo-lab.svg";
// import triangles from "@/public/images/triangles.svg";
import polygon from "@/public/images/polygon.svg";

const Help = () => {
  const items = [
    "يدير المنصة مجموعة من مرشدين الشفاء الذاتى المتدربات على مشاعر السكر من النوع الثاني",
    "المنصة 24 ساعة 7 ايام في الاسبوع مادة علمية متجددة و متطورة",
    "تواصل غير منقطع",
    "برامج تدريبية يقدمها مرشدون الشفاء طول الاسبوع",
    "يستفيد المشاركون بخبرات وتجارب الآخرين من خلال متابعة الآخر يرى كل مشارك بعد فى نفسه هو .. هى . لم يكن يراه من قبل",
    "سريه تامه فيما يدور فى البرنامج من جميع الأطراف",
  ];
  return (
    <>
      <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
        <div
          dir="rtl"
          className=" w-full flex py-8  flex-col justify-center items-center  lg:flex lg:flex-row lg:items-center lg:justify-center gap-10 "
        >
          <Image src={cardPhoto} alt="photo" className="hidden lg:flex z-40" />
          <Image
            src={cardPhotoMob}
            alt="photo"
            className="block lg:hidden w-[300px] z-40"
          />
          <div className="  w-full flex flex-col  px-4    gap-4 lg:justify-center h-auto  lg:items-start">
            {/* triangles pattern */}
            {/* <Image
              src={triangles}
              alt="triangles"
              className="absolute left-0 top-48 z-10"
            /> */}
            <h1 className="  text-[#4e2a84] text-center lg:text-right mb-[20px] [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
              كما نقوم بتقديم المساعدة من خلال المنصات الخاصة بنا:
            </h1>

            <div>
              {items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Image src={polygon} alt="icn" />

                  <p
                    key={index}
                    className=" text-[#000000] [font-family:--font-cairo] text-start w-full  text-lg font-normal  "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* <a href="https://payment.mtnhealingcenter.com/payment/8a7dac25-c00f-44e8-8815-c217ec0cbf23">
              <button className=" flex items-center rounded-lg border border-white hover:border-none  justify-center w-[170px] h-[42px] px-8 text-white bg-[#c87331]  text-center [font-family:--font-monadi] text-sm lg:text-xl font-normal  ">
                أشترك الان
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
