import { MouseEventHandler, useEffect, useRef, useState } from "react";
import CompanyExperience from "./CompanyExperience";
import { Company } from "../types/Experience";

const Experience = () => {
  const workExperience: Company[] = [
    {
      company: {
        name: "Henry",
        link: "https://www.soyhenry.com",
      },
      date: "Desde Septiembre hasta Octubre del año 2021",
      description:
        "Empresa que se dedica a la enseñanza de programación, brindando educación a distancia. He trabajado junto a ellos siendo asistente de enseñanza fullstack, las tareas a desarrollar fueron las siguientes:",
      tasks: [
        "Acompañarlos en el proceso de aprendizaje, solventando dudas que fueran surgiendo.",
        "Armar dinamicas de trabajo para la enseñanza.",
        "Participar en el pair programming.",
        "Brindar feedback para mejorar el bootcamp.",
      ],
    },
    {
      company: {
        name: "Wantfrom Company",
        link: "https://www.linkedin.com/company/wantfromcompany",
      },
      date: "Desde Marzo hasta Junio del año 2022",
      description:
        "Software Factory, empresa que se dedicaba al desarrollo de Software para empresas y personas a todo el país, las tareas a desarrollar fueron las siguientes:",
      tasks: [
        "Hablar con clientes sobre los servicios brindados",
        "Desarrollar nuevas características en la aplicación",
        "Arreglar bugs",
        "Trabajo en equipo",
      ],
    },
    {
      company: {
        name: "High Impact",
        link: "https://www.highimpact.com.ar",
      },
      date: "Desde Junio hasta la actualidad",
      description:
        "Software Factory, brinda servicios a todo el mundo, las tareas a desarrollar fueron las siguientes:",
      tasks: [
        "Hablar con clientes",
        "Aprender nuevas tecnologías necesarias para desarrollar nuevos productos",
        "Desarrollar nuevas caracteristicas y mantener código",
        "Trabajar en conjunto a otros desarrolladores y diseñadores para seguir patrones de diseño y desarrollo",
      ],
    },
  ];

  return (
    <section className="flex flex-col gap-2 text-xl">
      <div id="experience" className="bg-black sticky z-10 top-14 py-4">
        <h2 className="sticky top-20 text-2xl font-bold">- EXPERIENCIA:</h2>
      </div>
      <p>
        Soy desarrollador fullstack con experiencia formal en Desarrollo
        Frontend, usando las siguientes tecnologías:
      </p>
      <ul className="pl-2 flex flex-col gap-2 justify-around text-xl py-6">
        <li className="hoverable text-4xl w-fit">React</li>
        <li className="hoverable text-4xl w-fit">Next.js</li>
        <li className="hoverable text-4xl w-fit">Vue</li>
        <li className="hoverable text-4xl w-fit">GraphQL</li>
        <li className="hoverable text-4xl w-fit">Next-Auth</li>
        <li className="hoverable text-4xl w-fit">Recoil - Redux</li>
      </ul>
      <p>Empresas en las que he trabajado:</p>
      <CompanyExperience />
    </section>
  );
};

export default Experience;
