import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo-2.svg";
import cardPhotoMob from "@/public/images/card-photo-2.svg";

const Disease = () => {
  const items = [
    "ستتعلم استعادة شعورك بالقيمة الداخلية.",
    "ستدرك أن قيمتك لا تُستمد من الخارج بل من داخلك.",
    "تبدأ رحلة التشافي تدريجيًا مع تراجع حدة المرض وعودة الأنسولين للتدفق الطبيعي.",
  ];
  return (
    <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
      <div
        dir="rtl"
        className=" w-full flex py-8  px-14  flex-col justify-center items-center  lg:flex lg:flex-row lg:items-center lg:justify-center gap-10 "
      >
        <Image src={cardPhoto} alt="photo" className="hidden lg:flex z-40" />
        <Image
          src={cardPhotoMob}
          alt="photo"
          className="block lg:hidden w-[300px] z-40"
        />
        <div className="  w-full flex flex-col  px-4    gap-4 lg:justify-center h-auto  lg:items-start">
          {/* triangles pattern */}

          <h1 className="  text-[#000000]  lg:text-right mb-[20px] [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            مرض السكري من النوع الثاني{" "}
          </h1>

          <bdi className=" text-[#353535] text-right [font-family:--font-cairo] self-stretch  text-[15px] lg:text-[15px] font-bold ">
            مرض السكري من النوع الثاني هو اضطراب في استجابة الجسم للأنسولين، مما
            يؤدي إلى مقاومة الأنسولين وارتفاع مستوى السكر في الدم{" "}
          </bdi>

          <bdi className=" text-[#353535] text-right [font-family:--font-cairo] self-stretch  text-[15px] lg:text-[15px] font-bold ">
            من خلال الجلسات:{" "}
          </bdi>

          <ul className="flex flex-col gap-1 mb-10">
            {items.map((item, index) => (
              <li
                key={index}
                className=" text-[#353434] list-disc text-right  [font-family:--font-cairo]  text-[14px] lg:text-[14px] font-normal  opacity-80 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://payment.mtnhealingcenter.com/payment/448a9a14-16f0-42cc-a4b0-77872fad8a19"
            className="flex text-white cursor-pointer z-50 [font-family: --font-avenir] font-bold text-sm lg:text-lg w-[247px] h-[55px] justify-center items-center gap-2 bg-gradient-to-tr from-[#532a80] to-[#a12c53] shadow-md px-4 py-2 rounded-lg"
          >
            اشترك الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Disease;
