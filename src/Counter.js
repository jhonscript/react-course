import { useState, useEffect } from "react";

export function Counter() {
    const defaultCounter = 0;
    const defaultMensaje = "";
  let [counter, setCounter] = useState(defaultCounter);
  let [mensaje, setMensaje] = useState(defaultMensaje);

  const handlerClick = (step) => {
    setCounter(counter + step);
  };

  const handleOnchange = (valueInput) => {
    setMensaje(valueInput);
  };

  useEffect(() => {
    if(counter === defaultCounter)
        return;
    console.log("My Counter: " + counter);
  }, [counter]);

  useEffect(() => {
    if(mensaje === defaultMensaje)
        return;
    console.log("Mi Mensaje: " + mensaje);
  }, [mensaje]);

  return (
    <div>
      <input
        onChange={(e) => {
          handleOnchange(e.target.value);
        }}
      ></input>
      <h1>
        Counter: {counter} - {mensaje}
      </h1>
      <button
        onClick={() => {
          handlerClick(1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          handlerClick(-1);
        }}
      >
        Restar
      </button>
    </div>
  );
}
