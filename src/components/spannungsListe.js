import React from "react";
import { ACTIONS } from "./../App.js";

const roundToX = (num = 0, X = 20) =>
  isNaN(+(Math.round(num + `e${X}`) + `e-${X}`))
    ? 0
    : +(Math.round(num + `e${X}`) + `e-${X}`);

export default function SpannungsListe(props) {
  return (
    <div className="my-10">
      <ul
        className="grid w-full gap-y-2"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr min-content" }}
      >
        <strong>Zeigernummer</strong>
        <span>Spitzenspannung in Volt</span>
        <span>Winkel in Grad</span>
        <span>Komponentendarstellung</span>
        <span className="w-8"></span>
        {props.store.zeigerarray.map((zeiger) => {
          return (
            <React.Fragment key={zeiger.nummer}>
              <strong>
                <u>U</u>
                <sub>{zeiger.nummer}</sub>
              </strong>
              <span>{roundToX(zeiger.absolute, 4)} V</span>
              <span>{roundToX((zeiger.angle * 180) / Math.PI, 3)}</span>
              <span>
                {roundToX(zeiger.real, 3)} + {roundToX(zeiger.imaginary, 3)} * i
              </span>
              <span className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="rounded-xl p-1 cursor-pointer input-btn"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    props.dispatch({
                      type: ACTIONS.DELETE_ZEIGER,
                      payload: zeiger.nummer,
                    });
                  }}
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </span>
            </React.Fragment>
          );
        })}
      </ul>
      <button
        className="mt-10 p-5 danger-btn"
        onClick={() => {
          props.dispatch({ type: ACTIONS.RESET });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline w-10 mr-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
        </svg>
        <span>Reset</span>
      </button>
    </div>
  );
}
