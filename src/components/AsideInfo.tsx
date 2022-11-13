import React from "react";

const AsideInfo = () => {
  return (
    <div className="max-w-screen-xl w-full h-screen mx-auto fixed flex justify-end">
      <div className="border-4 h-80 mt-10 w-32 flex flex-col justify-center ">
        <div
          className="rotate-180 flex- flex-col h-full justify-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <h1>AGUSTIN ROBLEDO</h1>
          <p>DESARROLLADOR FRONTEND</p>
          <p>MI PORTFOLIO</p>
        </div>
      </div>
    </div>
  );
};

export default AsideInfo;
