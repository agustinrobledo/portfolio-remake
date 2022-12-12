import React from "react";

import styles from "../../styles/marquee.module.css";

const Technologies = () => {
  return (
    <div className="text-2xl">
      <div className="flex justify-center">
        <p>
          Soy desarrollador fullstack con experiencia formal en Desarrollo
          Frontend, usando las siguientes tecnologías:
        </p>
      </div>
      <div className={`${styles.marquee} py-24`}>
        <ul aria-hidden="true" className={`${styles.marquee__content} text-2xl lg:text-6xl pl-2`}>
          <li className="hoverable w-fit">React -</li>
          <li className="hoverable w-fit">Next.js -</li>
          <li className="hoverable w-fit">Vue -</li>
          <li className="hoverable w-fit">GraphQL -</li>
          <li className="hoverable w-fit">Next-Auth -</li>
          <li className="hoverable w-fit">Recoil - Redux -</li>
          <li className="hoverable w-fit">Strapi -</li>
          <li className="hoverable w-fit">Express -</li>
          <li className="hoverable w-fit">Node.js -</li>
          <li className="hoverable w-fit">React Native -</li>
          <li className="hoverable w-fit">React -</li>
          <li className="hoverable w-fit">Next.js -</li>
          <li className="hoverable w-fit">Vue -</li>
          <li className="hoverable w-fit">GraphQL -</li>
          <li className="hoverable w-fit">Next-Auth -</li>
          <li className="hoverable w-fit">Recoil - Redux -</li>
          <li className="hoverable w-fit">Strapi -</li>
          <li className="hoverable w-fit">Express -</li>
          <li className="hoverable w-fit">Node.js -</li>
          <li className="hoverable w-fit">React Native -</li>
          <li className="hoverable w-fit">React -</li>
          <li className="hoverable w-fit">Next.js -</li>
          <li className="hoverable w-fit">Vue -</li>
          <li className="hoverable w-fit">GraphQL -</li>
          <li className="hoverable w-fit">Next-Auth -</li>
          <li className="hoverable w-fit">Recoil - Redux -</li>
          <li className="hoverable w-fit">Strapi -</li>
          <li className="hoverable w-fit">Express -</li>
          <li className="hoverable w-fit">Node.js -</li>
          <li className="hoverable w-fit">React Native -</li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
