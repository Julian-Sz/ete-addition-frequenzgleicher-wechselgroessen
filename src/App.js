import React, { useReducer } from "react";
import "./App.css";
import "./index.css";
import InputPrompt from "./components/inputPrompt";

const ACTIONS = {
  ADD_ZEIGER: "add-zeiger",
  RESET: "reset",
};

function App() {
  const reducer = (prev, action) => {
    switch (action.type) {
      default:
        return prev;
    }
  };
  const store = useReducer(reducer);
  return (
    <div className="App">
      <header>
        <h1>Addition frequenzgleicher Wechselgrößen - Visualisierer</h1>
      </header>
      <main>
        <InputPrompt />
      </main>
      <footer>Copyright 2021 by Julian Szigethy</footer>
    </div>
  );
}

export default App;
