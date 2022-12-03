import Image from "next/image";
import Link from "next/link";
import React from "react";

const AsideInfo = () => {
  return (
    <div className="z-20 bg-black rounded py-6 border-white border-4 mt-10 w-36 hidden desktop:flex flex-col gap-6 justify-center translate-y-1/2 fixed right-10">
      <div
        className="rotate-180 flex flex-col justify-center pt-12 mt-6"
        style={{ writingMode: "vertical-rl" }}
      >
        <h1>AGUSTIN ROBLEDO</h1>
        <p>DESARROLLADOR FRONTEND</p>
        <p>MI PORTFOLIO</p>
      </div>
      <div className="flex flex-row justify-around">
        <Link
          href="https://linkedin.com/in/fernando-agustin-robledo"
          target="_blank"
        >
          <Image
            className="invert"
            src="/linkedin.png"
            alt="linkedin"
            width="32"
            height="32"
          />
        </Link>
        <Link href="https://github.com/agustinrobledo" target="_blank">
          <Image
            className="invert"
            src="/github.png"
            alt="github"
            width="32"
            height="32"
          />
        </Link>
      </div>
    </div>
  );
};

export default AsideInfo;
