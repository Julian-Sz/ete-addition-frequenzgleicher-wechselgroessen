import React from "react";

const roundToX = (num = 0, X = 20) => +(Math.round(num + `e${X}`) + `e-${X}`);

export default function SpannungsListe(props) {
  return (
    <div>
      <ul className="grid grid-cols-5 w-full">
        <strong>Zeigernummer</strong>
        <span>Spitzenspannung in Volt</span>
        <span>Winkel in Grad</span>
        <span>Komponentendarstellung</span>
        <span className="w-8"></span>
        {props.store.zeigerarray.map((zeiger) => {
          return (
            <React.Fragment key={zeiger.nummer}>
              <strong>
                U<sub>{zeiger.nummer}</sub>
              </strong>
              <span>{roundToX(zeiger.betrag, 4)} V</span>
              <span>{roundToX((zeiger.angle * 180) / Math.PI, 3)}</span>
              <span>
                {zeiger.real} + {zeiger.imaginary} * i
              </span>
              <span className="w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:bg-gray-300 rounded-xl p-1 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 16 16"
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
    </div>
  );
}
