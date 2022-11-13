import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";
import Navbar from "../src/components/Navbar";
import AsideInfo from "../src/components/AsideInfo";

export default function Home() {
  return (
    <Wrapper className={"font-sans"}>
      <>
        <Navbar />
        <AsideInfo />
        <Hero />
        <Experience />
      </>
    </Wrapper>
  );
}
