import { useRef, useEffect } from "react";
import gsap from "gsap";

const Cursor = () => {
  const bigBallRef = useRef<HTMLDivElement>(null);
  const smallBallRef = useRef<HTMLDivElement>(null);
  const hoverablesRef = useRef<NodeListOf<HTMLElement>>();

  const onMouseMove = (e: MouseEvent) => {
    gsap
      .to(bigBallRef.current, {
        x: e.clientX - 15,
        y: e.clientY - 15,
      })
      .duration(0.4);
    gsap
      .to(smallBallRef.current, {
        x: e.clientX,
        y: e.clientY,
      })
      .duration(0.1);
  };

  function onMouseHover(e: MouseEvent) {
    gsap
      .to(bigBallRef.current, {
        scale: 3,
      })
      .duration(0.3);
  }
  function onMouseHoverOut(e: MouseEvent) {
    gsap
      .to(bigBallRef.current, {
        scale: 1,
      })
      .duration(0.3);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", onMouseMove);
      hoverablesRef.current = document.querySelectorAll(".hoverable");
      console.log(hoverablesRef);
      for (let i = 0; i < hoverablesRef.current.length; i++) {
        hoverablesRef.current[i].addEventListener("mouseenter", onMouseHover);
        hoverablesRef.current[i].addEventListener(
          "mouseleave",
          onMouseHoverOut
        );
      }
    }
  }, []);

  return (
    <div className="cursor">
      <div ref={bigBallRef} className="cursor__ball cursor__ball--big ">
        <svg height="30" width="30">
          <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
        </svg>
      </div>

      <div ref={smallBallRef} className="cursor__ball cursor__ball--small">
        <svg height="10" width="10">
          <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Cursor;
