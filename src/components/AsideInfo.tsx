import Image from "next/image";
import React from "react";

const AsideInfo = () => {
  return (
    <div className="z-20 border-4 h-80 mt-10 w-32 flex flex-col gap-6 justify-center fixed right-20">
      <div
        className="rotate-180 flex- flex-col h-full justify-center"
        style={{ writingMode: "vertical-rl" }}
      >
        <h1>AGUSTIN ROBLEDO</h1>
        <p>DESARROLLADOR FRONTEND</p>
        <p>MI PORTFOLIO</p>
      </div>
      <div className="flex flex-row bg-white justify-around py-2">
        <Image src="/linkedin.png" alt="linkedin" width="32" height="32" />
        <Image src="/github.png" alt="github" width="32" height="32" />
      </div>
    </div>
  );
};

export default AsideInfo;
