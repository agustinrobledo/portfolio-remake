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
    ref?.current?.scrollIntoView({ block: "center" });
  };

  return (
    <nav className="max-w-screen-xl z-20 bg-black sticky top-0 py-6 px-2">
      <div className="flex flex-row gap-2">
        <span className="block desktop:hidden text-xl">
          Fernando Agustin Robledo
        </span>
        <button
          className="hidden desktop:block hoverable"
          onClick={() => handleScroll(experienceRef)}
        >
          EXPERIENCIA
        </button>
        <button
          className="hidden desktop:block hoverable"
          onClick={() => handleScroll(projectsRef)}
        >
          PROYECTOS
        </button>
        <button
          className="hidden desktop:block hoverable"
          onClick={() => handleScroll(contactRef)}
        >
          CONTACTO
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
