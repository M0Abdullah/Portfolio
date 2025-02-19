// import { LampDemo } from "@/component/AboutUs";
import { AboutUs } from "@/component/AboutUs";
import Form from "@/component/Form";
import HeaderSide from "@/component/HeaderSide";
import MySkills from "@/component/MySkills";
import { AnimatedPinDemo } from "@/component/Services";
import Stats from "@/component/Stats";

export default function Home() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-4">
    <HeaderSide />
  </div>
     <AboutUs />
     <Stats />
     <MySkills />
     <AnimatedPinDemo />
     <Form />
    </>
  );
}
