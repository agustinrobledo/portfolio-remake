import Hero from "../src/components/Hero";
import Experience from "../src/components/Experience";
import Wrapper from "../src/components/Wrapper";
import Navbar from "../src/components/Navbar";
import AsideInfo from "../src/components/AsideInfo";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Cursor from "../src/components/Cursor";
import Technologies from "../src/components/Technologies";
import Head from "next/head";
import { useState } from "react";
export default function Home() {
  return (
    <>
      <Head>
        <title>Fernando Agustin Robledo</title>
      </Head>
      <Wrapper>
        <div className="px-3 w-full md:w-4/5">
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
