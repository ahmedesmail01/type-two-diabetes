import Image from "next/image";
import React from "react";
import brain from "@/public/images/brain.svg";
import litter from "@/public/images/litter.svg";
import fair from "@/public/images/fair.svg";
import molecules from "@/public/images/molecule.svg";

const Gifts = () => {
  return (
    <div className="relative overflow-hidden text-center px-4  bg-[#fbf9ff]  py-10 flex flex-col  items-center  w-full">
      <Image src={molecules} alt="" className="absolute -top-32 left-0" />
      <h1 className="flex-[1_0_0] text-center text-[#000000] lg:w-[800px] [font-family:--font-monadi] mb-10 text-2xl lg:text-4xl font-normal  ">
        التقنيات المستخدمة في الجلسات{" "}
      </h1>

      <div
        dir="rtl"
        className="flex-col items-center lg:flex lg:flex-row lg:items-start gap-4 justify-center   [font-family:Tajawal] "
      >
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start   w-[300px]  lg:w-[350px] h-[200px] text-center  rounded-[10px]">
          <Image src={brain} alt="estro gym logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            فهم جذر المرض
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            كل نسيج جسدي مرتبط بشعور محدد المرض هو صوره الاضطراب الشعوري المقابل
          </p>
        </div>
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start   w-[300px]  lg:w-[350px] h-[200px] text-center  rounded-[10px]">
          <Image src={litter} alt="ragol kasseep logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            تلقي رسالة المرض{" "}
          </h2>

          <p className="w-[248px] text-start font-[pnu] opacity-80">
             المرض رسالة من مشاعرك المضطربة، وبمجرد فهمها تبدأ عملية الشفاء
            الذاتي{" "}
          </p>
        </div>

        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start   w-[300px]  lg:w-[350px] h-[200px] text-center  rounded-[10px]">
          <Image src={fair} alt="kyam logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            التدريب على الاتزان الشعوري{" "}
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            تدريبات مكثفة  على على اختيار المشاعر المتزنة، مما يؤثر ايجابا على
            صحتك و حالتك الشعورية{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
