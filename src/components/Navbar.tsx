import { RefObject, useEffect, useRef } from "react";

const Navbar = () => {
  const experienceRef = useRef<HTMLElement | null>();
  const projectsRef = useRef<HTMLElement | null>();
  const contactRef = useRef<HTMLElement | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      experienceRef.current = document.getElementById("experience");
      projectsRef.current = document.getElementById("projects");
      contactRef.current = document.getElementById("contact");
    }
  }, []);

  const handleScroll = (ref: RefObject<HTMLElement | null | undefined>) => {
    ref?.current?.scrollIntoView({});
  };

  return (
    <nav className="max-w-screen-xl z-10 mx-auto bg-black sticky top-0 py-6 px-2">
      <div className="flex flex-row gap-2">
        <button onClick={() => handleScroll(experienceRef)}>EXPERIENCIA</button>
        <button onClick={() => handleScroll(projectsRef)}>PROYECTOS</button>
        <button onClick={() => handleScroll(contactRef)}>SOBRE MÍ</button>
      </div>
    </nav>
  );
};

export default Navbar;
