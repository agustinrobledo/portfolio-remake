import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl z-10 mx-auto bg-black sticky top-0 py-6 px-2">
      <div className="flex flex-row gap-2">
        <a href="">EXPERIENCIA</a>
        <a href="">PROYECTOS</a>
        <a href="">SOBRE MÍ</a>
      </div>
    </nav>
  );
};

export default Navbar;
