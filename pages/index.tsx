import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";

export default function Home() {
  return (
    <Wrapper className={"font-sans"}>
      <>
        <Hero />
        <Experience />
      </>
    </Wrapper>
  );
}
