import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";
import Navbar from "../src/components/Navbar";
import AsideInfo from "../src/components/AsideInfo";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import { useRef } from "react";

export default function Home() {
  return (
    <Wrapper className={"font-sans"}>
      <div className="px-3">
        <Navbar />
        <AsideInfo />
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Wrapper>
  );
}
