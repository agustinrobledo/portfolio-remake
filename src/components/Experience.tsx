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
    <div className="min-h-screen">
      <div className="bg-black sticky z-10 top-14 py-4">
        <h2 className="sticky top-20 text-4xl font-bold">- EXPERIENCIA:</h2>
      </div>
      <p className="text-2xl">Empresas en las que he trabajado:</p>
      <section className="flex flex-col gap-6 text-2xl mt-24 justify-center">
        <div className="">
          <CompanyExperience />
        </div>
      </section>
    </div>
  );
};

export default Experience;
