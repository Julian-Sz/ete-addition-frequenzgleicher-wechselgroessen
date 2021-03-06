import React, { useReducer } from "react";
import "./App.css";
import "./index.css";
import InputPrompt from "./components/inputPrompt";
import Zeigerdiagramm from "./components/zeigerdiagramm";
import SpannungZeitdiagramm from "./components/spannung-zeitdiagramm";
import SpannungsListe from "./components/spannungsListe";
import { max as d3max } from "d3";
import distinctColors from "distinct-colors";

var palette = distinctColors({ count: 100 });

export const ACTIONS = {
  ADD_ZEIGER: "add-zeiger",
  SET_FREQUENCY: "set-frequency",
  DELETE_ZEIGER: "delete-zeiger",
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
          let absolute = Math.sqrt(real ** 2 + imaginary ** 2);
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
                absolute: absolute,
                angle: angle,
                color: palette[zeigernummer + 1].hex(),
              },
            ],
          };
        } else if (action.payload.type === "polar") {
          let absolute = parseFloat(action.payload.absolute);
          let angle = parseFloat(action.payload.angle);

          let imaginary = Math.sin(angle) * absolute;
          let real = Math.cos(angle) * absolute;

          return {
            zeigerarray: [
              ...prev.zeigerarray,
              {
                nummer: zeigernummer,
                real: real,
                imaginary: imaginary,
                absolute: absolute,
                angle: angle,
                color: palette[zeigernummer + 1].hex(),
              },
            ],
          };
        }
        break;
      case ACTIONS.SET_FREQUENCY:
        return { ...prev, frequency: action.payload };
      case ACTIONS.DELETE_ZEIGER:
        let indexToDelete = undefined;
        for (let index in prev.zeigerarray) {
          if (prev.zeigerarray[index].nummer === action.payload) {
            indexToDelete = index;
          }
        }
        let newZeigerArray = [...prev.zeigerarray];
        newZeigerArray.splice(indexToDelete, 1);
        return { ...prev, zeigerarray: newZeigerArray };
      case ACTIONS.RESET:
        return {
          zeigerarray: [],
          frequenz: undefined,
        };
      default:
        return prev;
    }
  };
  const [store, dispatch] = useReducer(reducer, {
    zeigerarray: [],
    frequenz: undefined,
  });

  return (
    <>
      <div className="backgroundElement h-full w-full absolute"></div>
      <div className="App flex flex-col justify-center md:my-10 p-2 md:p-10 relative w-screen md:w-none">
        <header>
          <h1 className="text-xl md:text-3xl">
            Addition frequenzgleicher Wechselgr????en - Visualisierer
          </h1>
        </header>
        <main>
          <InputPrompt dispatch={dispatch} />
          <Zeigerdiagramm store={store} dispatch={dispatch} />
          <SpannungZeitdiagramm store={store} dispatch={dispatch} />
          <SpannungsListe store={store} dispatch={dispatch} />
        </main>
        <footer>??2021 by Julian Szigethy</footer>
      </div>
    </>
  );
}

export default App;
