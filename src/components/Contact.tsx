const Contact = () => {
  return (
    <section id="contact" className="flex flex-col text-xl min-h-screen">
      <div className="bg-black sticky h-1/5 z-10 top-14 py-4">
        <h2 className="text-6xl font-bold">- CONTACTO</h2>
      </div>
      <div className="flex flex-col h-screen content-center justify-center gap-2 md:gap-6 text-center text-3xl  md:text-6xl">
        <h2>¿Quieres que trabajemos juntos?</h2>
        <span>Hablemos!</span>
        <ul className="flex flex-col underline desktop:flex-row justify-around gap-2 text-2xl md:text-4xl mt-4 md:mt-24 md:py-10">
          <li className="hoverable">
            <a href="https://linkedin.com/in/fernando-agustin-robledo">
              Linkedin
            </a>
          </li>
          <li className="hoverable">
            <a href="https://github.com/agustinrobledo">Github</a>
          </li>
          <li className="hoverable">
            <a href="mailto:agustinrobledo59.ar@gmail.com">Mail</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
