import Image from "next/image";
import React from "react";
import drAhmed from "@/public/images/drAhmed.svg";

const DrAhmed = () => {
  const Info = [
    "طبيب مصري خريج كلية الطب جامعة عين شمس عام 1982",
    "أستاذ مدرب علم الميتاهيلث ونائب رئيس الجمعية العالمية للميتا ماديسون بالولايات المتحدة الأمريكية 	IMMA® (سابقاً) . علم الميتاهيلث هو منظور جديد للطب ينبع من منظور الشفاء وليس المرض",
    "الطبيب الأول والوحيد في العالم العربي الذي يعتمد في تشخيص وعلاج عملائه على منظور علاجي وتدريبي يعتمد على تشخيص النفس بالألوان وتشخيص المرض بالسبب النفسي ( المشاعر الذاتية ) له علم الميتاهيلث منذ عام 2012 حتى الآن.",
    "مؤسس الطب التصنيفي",
    "قام بتأسيس الطب التصنيفي عام 2019 بعد أبحاث وتجارب دامت أكثر من 7 سنوات مستمرة في التطور والتدريس حتى الأن، وقد أعتمد فيه على طريقة التشخيص والعلاج بتحديد المشاعر المضطربة بدقة شديدة والتي تتسبب في صدمات تنتهي بأمراض عضوية ونفسية ، ويتم تحديد هذه الاضطرابات بتقنيات متعددة يقوم بممارستها بعيادته بالقاهرة وأيضاً البدء في تدريسها لطالبي هذا العلم .",
    "قام الدكتور بعمل جلسات لمرضى لسكر من 2019",
    "المجموعات العلاجيه للسكر بدءت من 2022 اكتوبر الى الان",
    "-بدأ الدكتور بعمل جلسات لمرضى  السكري بداية من  2019",
    "-أما المجموعات العلاجية للسكر بدأت منذ 2022 اكتوبر الى الان،",
  ];

  return (
    <div className="w-full md:px-[96px] pt-[60px] mb-[60px] md:mb-[96px]">
      <div className="lg:flex items-center justify-between mx-4  gap-6">
        <Image
          src={drAhmed}
          alt="dr ahmed"
          className="md:w-[606px] md:h-[750px] mb-10 "
        />
        <div>
          <h2 className=" self-stretch md:mb-[40px] text-[#4e2a84] text-right [font-family:--font-monadi] text-3xl lg:text-4xl  ">
            د.أحمد الدملاوي
          </h2>

          <div dir="rtl" className="flex flex-col gap-2 md:w-[606px]">
            {Info.map((item, index) => (
              <div key={index} className="flex items-start gap-1 ">
                <p
                  style={{
                    width: "8px !important",
                    height: "8px !important",
                  }}
                  className=" bg-black rounded-full mt-3"
                ></p>
                <bdi className="w-fit text-black [font-family:--font-cairo] text-base font-normal px-4 leading-[35px]">
                  {item}
                </bdi>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAhmed;
