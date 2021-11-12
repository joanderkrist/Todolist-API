import React from "react";
import "../App.css";

const tarea = ({ borrar, id, tarea }) => {
  const borrarTarea = () => {
    borrar(id);
  };

  return (
    <div>
      <div className="tarea">
        <span>{tarea.label}</span>
        <button onClick={borrarTarea} onfocus="" >Borrar</button>
      </div>
    </div>
  );
};

export default tarea;