import React, { useState } from "react";
import { ACTIONS } from "./../App.js";

export default function InputPrompt(props) {
  const [state, setState] = useState({
    real: undefined,
    imaginary: undefined,
    frequency: undefined,
  });

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl mb-5">Eingabe von Wechselgrößen:</h2>
      <h3 className="text-2xl">
        Frequenz:{" "}
        <input
          type="text"
          placeholder="in Hz"
          className="bg-gray-100 hover:bg-gray-300"
          onChange={(e) => {
            setState((prev) => ({ ...prev, frequency: e.target.value }));
          }}
        ></input>
        <input
          type="submit"
          value="Ändern"
          className="ml-5 bg-green-400 hover:bg-green-600"
          onClick={() => {
            console.log(state);
            props.dispatch({
              type: ACTIONS.SET_FREQUENCY,
              payload: state.frequency,
            });
          }}
        ></input>
      </h3>
      <ul className="flex flex-col list-none">
        <li className="flex flex-col">
          <h3 className="mb-4">In der Komponentenform:</h3>
          <span className="flex w-11/12 text-center justify-center mb-5">
            <input
              type="text"
              placeholder="Realteil"
              className="bg-gray-100 hover:bg-gray-300"
              onChange={(e) => {
                setState((prev) => ({ ...prev, real: e.target.value }));
              }}
            ></input>
            +
            <input
              type="text"
              placeholder="Imaginärteil"
              className="bg-gray-100 hover:bg-gray-300"
              onChange={(e) => {
                setState((prev) => ({ ...prev, imaginary: e.target.value }));
              }}
            ></input>
            * i
            <input
              type="submit"
              value="Eingabe"
              className="ml-5 bg-green-400 hover:bg-green-600"
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
            ></input>
          </span>
        </li>
      </ul>
    </div>
  );
}
