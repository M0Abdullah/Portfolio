import { LampDemo } from "@/component/AboutUs";
import HeaderSide from "@/component/HeaderSide";
import { AnimatedPinDemo } from "@/component/Services";
import Stats from "@/component/Stats";

export default function Home() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-4">
    <HeaderSide />
  </div>
     <LampDemo />
     <Stats />
     <AnimatedPinDemo />
    </>
  );
}
