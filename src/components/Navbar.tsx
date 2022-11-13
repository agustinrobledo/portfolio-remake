import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto sticky bg-black top-0 left-0 right-0 py-6 border-white border-4">
      <div className="flex flex-row gap-2">
        <a href="">EXPERIENCIA</a>
        <a href="">PROYECTOS</a>
        <a href="">SOBRE MÍ</a>
      </div>
    </nav>
  );
};

export default Navbar;
