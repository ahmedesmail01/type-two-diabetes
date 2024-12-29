import Image from "next/image";
import React from "react";
import ragol from "@/public/images/ragol-kaseep.svg";
import estro from "@/public/images/estro.svg";
import kyam from "@/public/images/kyam.svg";

const Subs = () => {
  return (
    <div className="text-center px-4 md:pb-[96px]  pb-[60px] flex flex-col items-center  w-full">
      <h1 className="flex-[1_0_0] text-center py-8  lg:w-[800px] [font-family:--font-monadi] mb-10 text-2xl lg:text-4xl font-normal bg-gradient-to-r from-[#4E2A84] to-[#E52E2B] bg-clip-text text-transparent ">
        {/* <h1 className="flex-[1_0_0] text-center [font-family:Monadi] text-4xl font-normal leading-normal bg-gradient-to-r from-[#4E2A84] to-[#E52E2B] bg-clip-text text-transparent"> */}
        اشترك الآن في المجموعة العلاجية الخاصة بالسكري من النوع الثاني واحصل على
        مميزات إضافية{" "}
      </h1>

      <div
        dir="rtl"
        className="flex-col items-center lg:flex lg:flex-row lg:items-start gap-4 justify-center mb-10  [font-family:Tajawal] "
      >
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#4e2a84] w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={estro} alt="estro gym logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            إستروجيم (12 حلقة ){" "}
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            برنامج مخصص للإناث يعيد التوازن الفطري للأنثى، والعودة إلى هويتها
            الأنثوية مما يساهم في تخفيف حدة الأعراض المرتبطة بمرض السكري من
            النوع الثاني{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#4e2a84] w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={ragol} alt="ragol kasseep logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            الرجل الكسيب (12 حلقة){" "}
          </h2>

          <p className="w-[248px] text-start font-[pnu] opacity-80">
            برنامج للذكور يساعد على استعادة الهوية الذكورية، مما يساهم في تحسين
            الحالة الصحية وتخفيف حدة الأعراض المرتبطة بمرض السكري من النوع
            الثاني{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#4e2a84] w-[300px]  lg:w-[350px] h-[300px] text-center  rounded-[10px]">
          <Image src={kyam} alt="kyam logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#000000] leading-6">
            برنامج القيم (12 حلقة){" "}
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            ركز على تعزيز الطمأنينة، والقيمة، والقدرة، والحرية كركائز لحياة
            متزنة ورفع جودة الحياة بشكل عام. 
          </p>
        </div>
      </div>
      <a
        href="https://payment.mtnhealingcenter.com/payment/448a9a14-16f0-42cc-a4b0-77872fad8a19"
        className="flex text-white cursor-pointer z-50 [font-family: --font-avenir] font-bold text-sm lg:text-lg w-[247px] h-[55px] justify-center items-center gap-2 bg-gradient-to-tr from-[#532a80] to-[#a12c53] shadow-md px-4 py-2 rounded-lg"
      >
        اشترك الان
      </a>
    </div>
  );
};

export default Subs;
