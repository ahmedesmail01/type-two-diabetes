import Image from "next/image";
import Disease from "./components/Disease";
import DrAhmed from "./components/DrAhmed";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Gifts from "./components/Gifts";
import Help from "./components/Help";
import Hero from "./components/Hero";
import SecTwo from "./components/SecTwo";
import Subs from "./components/Subs";
import Subscribe from "./components/Subscribe";
import Testmonials from "./components/Testmonials";
import WhySec from "./components/WhySec";
import pattern from "@/public/images/pattern.svg";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden bg-[#ffffff] justify-center items-center">
      <Hero />
      <div className="relative">
        <SecTwo />
        <WhySec />
        <Disease />
        <Image
          src={pattern}
          alt="triangles"
          className="absolute left-[0px] -top-[0px]"
        />
      </div>
      <Gifts />
      <DrAhmed />
      <Gain />
      <Help />
      <Subs />
      <Testmonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
