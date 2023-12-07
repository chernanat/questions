import React from "react";

function Start({setStart, data, handleStart}) {
  return (
    <div>
      <div className="">
        <h1 className="text-center mt-10 text-3xl font-bold">
          Welcome to The Trivia Challenge!
        </h1>
        <p className="text-center mt-10 font-semibold text-lg uppercase">
          10 preguntas seran mostradas con respuesta falso o verdadero.
        </p>
        <p className="text-center mt-10 font-semibold text-lg uppercase">
          Podras obtener un puntaje perfecto de 10!!! ?
        </p>
        <p className="text-center mt-10 font-semibold text-lg uppercase">
          Try It!!!
        </p>
        {data.length > 0 ? (
          <div className="text-center mt-10">
            <button
              onClick={() => {
                handleStart();
              }}
              className="bg-green-700 rounded px-2 py-2 text-lg font-bold hover:bg-green-600"
            >
              Start Challenge!
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center mt-5">
            <div
              role="alert"
              className="bg-red-500 text-white font-bold rounded p-4"
            >
              <p className="text-center">Advertencia</p>
              <p className="text-center text-sm">
                Reiniciar la página nuevamente. Datos no cargados.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Start;
