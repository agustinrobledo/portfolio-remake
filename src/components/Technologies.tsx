import React from "react";

import styles from "../../styles/marquee.module.css";

const Technologies = () => {
  return (
    <div className="font-sans text-2xl">
      <div className="flex justify-center">
        <p>
          Soy desarrollador fullstack con experiencia formal en Desarrollo
          Frontend, usando las siguientes tecnologías:
        </p>
      </div>
      <div className={`${styles.marquee} py-24 min-w-screen`}>
        <ul aria-hidden="true" className={`${styles.marquee__content} pl-2`}>
          <li className="hoverable text-6xl w-fit">React -</li>
          <li className="hoverable text-6xl w-fit">Next.js -</li>
          <li className="hoverable text-6xl w-fit">Vue -</li>
          <li className="hoverable text-6xl w-fit">GraphQL -</li>
          <li className="hoverable text-6xl w-fit">Next-Auth -</li>
          <li className="hoverable text-6xl w-fit">Recoil - Redux -</li>
          <li className="hoverable text-6xl w-fit">Strapi -</li>
          <li className="hoverable text-6xl w-fit">Express -</li>
          <li className="hoverable text-6xl w-fit">Node.js -</li>
          <li className="hoverable text-6xl w-fit">React Native -</li>
          <li className="hoverable text-6xl w-fit">React -</li>
          <li className="hoverable text-6xl w-fit">Next.js -</li>
          <li className="hoverable text-6xl w-fit">Vue -</li>
          <li className="hoverable text-6xl w-fit">GraphQL -</li>
          <li className="hoverable text-6xl w-fit">Next-Auth -</li>
          <li className="hoverable text-6xl w-fit">Recoil - Redux -</li>
          <li className="hoverable text-6xl w-fit">Strapi -</li>
          <li className="hoverable text-6xl w-fit">Express -</li>
          <li className="hoverable text-6xl w-fit">Node.js -</li>
          <li className="hoverable text-6xl w-fit">React Native -</li>
          <li className="hoverable text-6xl w-fit">React -</li>
          <li className="hoverable text-6xl w-fit">Next.js -</li>
          <li className="hoverable text-6xl w-fit">Vue -</li>
          <li className="hoverable text-6xl w-fit">GraphQL -</li>
          <li className="hoverable text-6xl w-fit">Next-Auth -</li>
          <li className="hoverable text-6xl w-fit">Recoil - Redux -</li>
          <li className="hoverable text-6xl w-fit">Strapi -</li>
          <li className="hoverable text-6xl w-fit">Express -</li>
          <li className="hoverable text-6xl w-fit">Node.js -</li>
          <li className="hoverable text-6xl w-fit">React Native -</li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
