import { RefObject, useEffect, useRef } from "react";

const Hero = () => {
  const contactRef = useRef<HTMLElement | null>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      contactRef.current = document.getElementById("contact");
    }
  });

  const handleScroll = (ref: RefObject<HTMLElement | null | undefined>) => {
    ref?.current?.scrollIntoView({});
  };

  return (
    <section className="flex flex-col justify-center h-screen text-2xl lg:text-4xl font-bold leading-normal">
      <div>
        <h1>MI NOMBRE ES AGUSTIN ROBLEDO</h1>
        <p>
          SOY DESARROLLADOR FRONTEND, ME APASIONA CREAR LAS MEJORES EXPERIENCIAS
          DE USUARIO, ESTA PAGINA ES UNA RECOPILACIÓN DE MIS ULTIMOS TRABAJOS Y
          PROYECTOS.
        </p>
        <button
          onClick={() => handleScroll(contactRef)}
          className="bg-yellow text-black hoverable mt-2"
        >
          HABLEMOS!
        </button>
      </div>
    </section>
  );
};

export default Hero;
