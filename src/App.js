import React, { useReducer } from "react";
import "./App.css";
import "./index.css";
import InputPrompt from "./components/inputPrompt";
import Zeigerdiagramm from "./components/zeigerdiagramm";

export const ACTIONS = {
  ADD_ZEIGER: "add-zeiger",
  RESET: "reset",
};

function App() {
  const reducer = (prev, action) => {
    switch (action.type) {
      case ACTIONS.ADD_ZEIGER:
        if (action.payload.type === "kartesisch") {
          console.log(prev.zeigerarray);
          return {
            zeigerarray: [
              ...prev.zeigerarray,
              {
                real: action.payload.real,
                imaginary: action.payload.imaginary,
              },
            ],
          };
        }
        return;
      default:
        return prev;
    }
  };
  const [store, dispatch] = useReducer(reducer, { zeigerarray: [] });
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
      </main>
      <footer>©2021 by Julian Szigethy</footer>
    </div>
  );
}

export default App;
