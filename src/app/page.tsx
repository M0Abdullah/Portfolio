import { AboutUs } from "@/component/AboutUs";
import Form from "@/component/Form";
import HeaderSide from "@/component/HeaderSide";
import MySkills from "@/component/MySkills";
import Stats from "@/component/Stats";
import Experience from "@/component/Experience";
import Projects from "@/component/Projects";
import Navigation from "@/component/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <HeaderSide />
      
      {/* About Section */}
      <AboutUs />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Skills Section */}
      <MySkills />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Form />
    </>
  );
}
