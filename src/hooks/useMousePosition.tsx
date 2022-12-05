import { useEffect, useState } from "react";

const useMousePosition = ({ onMouseMove = (e: any) => {} }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
