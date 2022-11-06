import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <>
        <Hero />
        <Experience />
      </>
    </Wrapper>
  );
}
