import React, { useReducer } from "react";
import "./App.css";
import "./index.css";
import InputPrompt from "./components/inputPrompt";
import Zeigerdiagramm from "./components/zeigerdiagramm";
import SpannungZeitdiagramm from "./components/spannung-zeitdiagramm";
import { max as d3max } from "d3";
import distinctColors from "distinct-colors";

// const COLORARRAY = [
//   "#0652DD",
//   "#1289A7",
//   "#A3CB38",
//   "#F79F1F",
//   "#9980FA",
//   "#EA2027",
//   "#6F1E51",
//   "#006266",
//   "#009432",
// ];

var palette = distinctColors({ count: 100 });

export const ACTIONS = {
  ADD_ZEIGER: "add-zeiger",
  SET_FREQUENCY: "set-frequency",
  RESET: "reset",
};

function App() {
  const reducer = (prev, action) => {
    switch (action.type) {
      case ACTIONS.ADD_ZEIGER:
        let zeigernrMax = d3max(prev.zeigerarray, (zeiger) => zeiger.nummer);
        let zeigernummer = zeigernrMax + 1;
        if (isNaN(zeigernummer)) {
          zeigernummer = 0;
        }
        if (action.payload.type === "kartesisch") {
          // console.log(prev.zeigerarray);
          let real = action.payload.real;
          let imaginary = action.payload.imaginary;
          let betrag = Math.sqrt(real ** 2 + imaginary ** 2);
          let angle = Math.atan(imaginary / real);
          if (real > 0 && imaginary < 0) {
            angle = Math.atan(imaginary / real) + 2 * Math.PI;
          } else if (real < 0) {
            angle = Math.atan(imaginary / real) + Math.PI;
          }
          return {
            zeigerarray: [
              ...prev.zeigerarray,
              {
                nummer: zeigernummer,
                real: real,
                imaginary: imaginary,
                betrag: betrag,
                angle: angle,
                color: palette[zeigernummer].hex(),
              },
            ],
          };
        }
        break;
      case ACTIONS.SET_FREQUENCY:
        return { ...prev, frequency: action.payload };
      default:
        return prev;
    }
  };
  const [store, dispatch] = useReducer(reducer, {
    zeigerarray: [],
    frequenz: undefined,
  });

  return (
    <div className="App flex flex-col justify-center">
      <header>
        <h1 className="text-3xl">
          Addition frequenzgleicher Wechselgrößen - Visualisierer
        </h1>
      </header>
      <main>
        <InputPrompt dispatch={dispatch} />
        <Zeigerdiagramm store={store} dispatch={dispatch} />
        <SpannungZeitdiagramm store={store} dispatch={dispatch} />
      </main>
      <footer>©2021 by Julian Szigethy</footer>
    </div>
  );
}

export default App;
