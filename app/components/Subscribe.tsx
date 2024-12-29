import React from "react";

const Subscribe = () => {
  return (
    <div
      id="subscribe"
      className="text-center px-4 flex flex-col w-full justify-center items-center pb-[60px] lg:pb-[96px] "
    >
      <h1 className="self-stretch   text-center  [font-family:--font-monadi] text-[#4e2a84] text-2xl lg:text-3xl  ">
        اشترك الأن
      </h1>
      <p className="flex mb-4 lg:w-[878px] md:mb-[48px] h-[67px] flex-col justify-center items-center text-[#000000] text-center [font-family:--font-cairo] text-base lg:text-lg font-normal ">
           الجلسات مخصصة فقط 16 سنة فما فوق شرط ان تكون الحالة لا تتطلب تدخلًا
        طبيًا فوريًا.{" "}
      </p>

      <div className="lg:w-[694px] p-[24px] lg:p-[48px] flex flex-col gap-4 items-center border-2 border-[#4e2a84] rounded-3xl">
        <h2 className="self-stretch text-[#000000] text-center [font-family:--font-cairo] text-2xl font-bold leading-6">
          مدة المجموعة العلاجية: 3 أشهر
        </h2>
        <p className="self-stretch text-[#000000] text-center [font-family:--font-expo] text-xl font-medium leading-6">
          سعر الاشتراك
        </p>
        <p className="text-[#4e2a84] text-[50px] font-bold  text-center [font-family:--font-expo]">
          1650$
        </p>
        <p className="text-[#4e2a84] text-[30px] font-bold  text-center [font-family:--font-expo]">
          خصم إضافي 150$ عند الدفع نقدًا 
        </p>
        <bdi className="self-stretch text-[#000000] text-center [font-family:--font-expo] text-xl font-semibold leading-6">
          12 لقاء مع دكتور أحمد الدملاوي
        </bdi>
        <a
          href="https://payment.mtnhealingcenter.com/payment/8a7dac25-c00f-44e8-8815-c217ec0cbf23"
          className="flex justify-center font-bold items-center text-white [font-family:--font-expo] lg:text-[32px] gap-1 self-stretch bg-gradient-to-tr from-[#532a80] to-[#a12c53] px-4 py-8 rounded-[20px]"
        >
          أشترك الان
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
