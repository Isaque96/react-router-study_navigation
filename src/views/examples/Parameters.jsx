import React from "react";
import { useParams } from "react-router-dom";

const Parameters = (props) => {
  const { id } = useParams();

  return (
    <div className="Parameters">
      <h1>Parâmetros</h1>
      <h2>Valor: {id}!</h2>
    </div>
  );
};

export default Parameters;
