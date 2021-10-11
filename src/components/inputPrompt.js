import React, { useState } from "react";
import { ACTIONS } from "./../App.js";

export default function InputPrompt(props) {
  const [state, setState] = useState({
    real: undefined,
    imaginary: undefined,
    frequency: 50,
    absolute: undefined,
    angle: undefined,
  });

  return (
    <div className="flex flex-col justify-center mb-10 items-center">
      <h2 className="text-l md:text-2xl mb-5 my-3">
        Eingabe von Wechselgrößen:
      </h2>
      <ul className="grid grid-cols-5 list-none justify-center items-center max-w-xl">
        <h3
          className="col-span-2 md:text-2xl align-middle"
          style={{ height: "min-content" }}
        >
          Frequenz:
        </h3>
        <input
          type="text"
          placeholder="in Hz"
          value={state.frequency}
          className="p-2 h-5/6 bg-gray-900 hover:bg-gray-700"
          onChange={(e) => {
            setState((prev) => ({ ...prev, frequency: e.target.value }));
          }}
        ></input>
        <span className="md:text-2xl align-middle">Hz</span>
        <button
          type="button"
          className="md:ml-5 input-btn p-2"
          onClick={() => {
            console.log(state);
            props.dispatch({
              type: ACTIONS.SET_FREQUENCY,
              payload: state.frequency,
            });
          }}
        >
          Ändern
        </button>
        <h3 className="mb-4 md:text-xl md:mt-2 col-span-5">
          In der Komponentenform:
        </h3>
        <input
          type="text"
          placeholder="Realteil"
          className="p-2 h-5/6 bg-gray-900 hover:bg-gray-700"
          onChange={(e) => {
            setState((prev) => ({ ...prev, real: e.target.value }));
          }}
        ></input>
        <span className="m-2">+</span>
        <input
          type="text"
          placeholder="Imaginärteil"
          className="p-2 h-5/6 bg-gray-900 hover:bg-gray-700"
          onChange={(e) => {
            setState((prev) => ({ ...prev, imaginary: e.target.value }));
          }}
        ></input>
        <span className="m-2">* i</span>
        <button
          type="button"
          className="md:ml-5 input-btn p-2"
          onClick={() => {
            console.log(state);
            props.dispatch({
              type: ACTIONS.ADD_ZEIGER,
              payload: {
                type: "kartesisch",
                real: state.real,
                imaginary: state.imaginary,
              },
            });
            props.dispatch({
              type: ACTIONS.SET_FREQUENCY,
              payload: state.frequency,
            });
          }}
        >
          Eingabe
        </button>
        <h3 className="mb-4 md:mt-2 md:text-xl col-span-5">
          In der Polarform:
        </h3>
        <input
          type="text"
          placeholder="Betrag"
          className="p-2 h-5/6 bg-gray-900 hover:bg-gray-700"
          onChange={(e) => {
            setState((prev) => ({ ...prev, absolute: e.target.value }));
          }}
        ></input>
        <span className="m-2">&amp;</span>
        <input
          type="text"
          placeholder="Winkel in Grad"
          className="p-2 h-5/6 bg-gray-900 hover:bg-gray-700 col-span-2"
          onChange={(e) => {
            setState((prev) => ({
              ...prev,
              angle: (e.target.value * Math.PI) / 180,
            }));
          }}
        ></input>
        <button
          type="button"
          className="md:ml-5 input-btn p-2"
          onClick={() => {
            console.log(state);
            props.dispatch({
              type: ACTIONS.ADD_ZEIGER,
              payload: {
                type: "polar",
                absolute: state.absolute,
                angle: state.angle,
              },
            });
            props.dispatch({
              type: ACTIONS.SET_FREQUENCY,
              payload: state.frequency,
            });
          }}
        >
          Eingabe
        </button>
      </ul>
    </div>
  );
}
