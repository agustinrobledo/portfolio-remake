const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-2 text-xl">
      <div>
        <h2 className="sticky top-20 text-2xl font-bold">- CONTACTO</h2>
      </div>
      <div>
        <h2 className="text-xl">¿Quieres que trabajemos juntos? Hablemos</h2>
        <div className="flex flex-col underline">
          <li>
            <a>Linkedin</a>
          </li>
          <li>
            <a>Github</a>
          </li>
          <li>
            <span>agustinrobledo59.ar@gmail.com</span>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Contact;
