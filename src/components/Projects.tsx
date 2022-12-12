import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/accordion.module.css";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-2 text-2xl">
      <div className="bg-black sticky top-16 py-4">
        <h2 className="sticky top-20 text-6xl font-bold">- PROYECTOS:</h2>
      </div>
      <p>Actualmente he estado trabajando de manera formal en este proyecto:</p>
      <Accordion.Root defaultValue="item-1" type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header className="text-2xl font-bold my-2 border border-white bg-black hover:bg-white hover:text-black rounded duration-300">
            <Accordion.Trigger className="hoverable w-full p-12 flex justify-start">
              <strong>AWER - REVIEWS</strong>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.AccordionContent
            className={`${styles.AccordionContent} flex flex-row gap-2 py-4`}
          >
            <div className="flex flex-col text-xl desktop:w-1/2 ">
              <p>
                AWER Es una plataforma donde los usuarios pueden dejar reviews o
                participar de encuestas y juegos para ganar premios en sus
                empresas favoritas. A su vez AWER cuenta con un panel de gestion
                para empresas donde las mismas pueden hacer campañas de
                marketing, en relación a la base de datos inmensa con la que
                cuenta AWER.
              </p>
              <span>Tareas a realizar:</span>
              <li>Implementar nuevas funcionalidades en la plataforma.</li>
              <li>Arreglar bugs.</li>
              <li>Mejorar el SEO.</li>
              <li>Mejorar performance de la página.</li>
              <li>Diseño de la misma.</li>
            </div>
            <img
              src="data:image/png;base64,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"
              alt="awer reviews"
              className="w-1/2 rounded hidden desktop:block"
            />
          </Accordion.AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};

export default Projects;
