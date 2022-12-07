import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";
import Navbar from "../src/components/Navbar";
import AsideInfo from "../src/components/AsideInfo";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Cursor from "../src/components/Cursor";
import Technologies from "../src/components/Technologies";

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="px-3 w-4/5">
          <Navbar />
          <AsideInfo />
          <Hero />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </Wrapper>
      <Cursor />
    </>
  );
}
