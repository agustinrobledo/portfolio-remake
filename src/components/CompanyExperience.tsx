import * as Accordion from "@radix-ui/react-accordion";
import styles from "../../styles/accordion.module.css";

const CompanyExperience = () => {
  return (
    <Accordion.Root id="experience" type="single" collapsible className="flex flex-col mt-12 gap-16">
      <Accordion.Item value={"1"} key="Henry">
        <Accordion.Header
          className={`${styles.AccordionHeader} text-2xl font-bold my-2 border border-white bg-black hover:bg-white hover:text-black rounded duration-300`}
        >
          <Accordion.Trigger className="hoverable w-full p-12 flex">
            <strong>Henry</strong>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.AccordionContent
          className={`${styles.AccordionContent} w-fit text-xl border border-white p-4 rounded`}
        >
          <div>
            <p>Desde Septiembre hasta Octubre del año 2021</p>
            <p>
              Empresa que se dedica a la enseñanza de programación, brindando
              educación a distancia. He trabajado junto a ellos siendo asistente
              de enseñanza fullstack, las tareas a desarrollar fueron las
              siguientes:
            </p>
            <li>
              Acompañarlos en el proceso de aprendizaje, solventando dudas que
              fueran surgiendo.
            </li>
            <li>Armar dinamicas de trabajo para la enseñanza.</li>
            <li>Participar en el pair programming.</li>
            <li>Brindar feedback para mejorar el bootcamp.</li>
          </div>
        </Accordion.AccordionContent>
      </Accordion.Item>
      <Accordion.Item value={"2"} key="Wantfrom Company">
        <Accordion.Header
          className={`${styles.AccordionHeader} text-2xl font-bold my-2 border border-white bg-black hover:bg-white hover:text-black rounded duration-300`}
        >
          <Accordion.Trigger className="hoverable w-full p-12 flex">
            <strong>Wantfrom Company</strong>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.AccordionContent
          className={`${styles.AccordionContent} w-fit text-xl border border-white p-4 rounded`}
        >
          <div>
            <p>Desde Marzo hasta Junio del año 2022</p>
            <p>
              Software Factory, empresa que se dedicaba al desarrollo de
              Software para empresas y personas a todo el país, las tareas a
              desarrollar fueron las siguientes:
            </p>
            <li>Hablar con clientes sobre los servicios brindados</li>
            <li>Desarrollar nuevas características en la aplicación</li>
            <li>Arreglar bugs</li>
            <li>Trabajo en equipo</li>
          </div>
        </Accordion.AccordionContent>
      </Accordion.Item>
      <Accordion.Item value={"3"} key="High Impact">
        <Accordion.Header
          className={`${styles.AccordionHeader} text-2xl font-bold my-2 border border-white bg-black hover:bg-white hover:text-black rounded duration-300`}
        >
          <Accordion.Trigger className="hoverable w-full p-12 flex">
            <strong>High Impact</strong>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.AccordionContent
          className={`${styles.AccordionContent} w-fit text-xl border border-white p-4 rounded`}
        >
          <div>
            <p>Desde Junio hasta la actualidad</p>
            <p>
              Software Factory, brinda servicios a todo el mundo, las tareas a
              desarrollar fueron las siguientes:,
            </p>
            <li>Hablar con clientes</li>
            <li>
              Aprender nuevas tecnologías necesarias para desarrollar nuevos
              productos
            </li>
            <li>Desarrollar nuevas caracteristicas y mantener código</li>
            <li>
              Trabajar en conjunto a otros desarrolladores y diseñadores para
              seguir patrones de diseño y desarrollo,
            </li>
          </div>
        </Accordion.AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default CompanyExperience;
