import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function Zeigerdiagramm(props) {
  const maxBetrag = d3.max(props.store.zeigerarray, (zeiger) =>
    Math.sqrt(zeiger.real ** 2 + zeiger.imaginary ** 2)
  );

  const scaleReal = d3
    .scaleLinear()
    .domain([-1 * maxBetrag - maxBetrag * 0.1, maxBetrag + maxBetrag * 0.1])
    .range([0, 600]);

  const scaleImaginary = d3
    .scaleLinear()
    .domain([maxBetrag + maxBetrag * 0.1, -1 * maxBetrag - maxBetrag * 0.1])
    .range([0, 600]);

  console.log(maxBetrag);

  const realAxis = d3.axisBottom().scale(scaleReal);
  const imaginaryAxis = d3.axisLeft().scale(scaleImaginary);
  const svg = useRef(null);

  useEffect(() => {
    d3.selectAll(".axis-zeiger").remove();

    d3.select("#zeiger_svg")
      .append("g")
      .attr("class", "axis-zeiger")
      .attr("transform", "translate(0, 300)")
      .call(realAxis);
    d3.select("#zeiger_svg")
      .append("g")
      .attr("class", "axis-zeiger")
      .attr("transform", "translate(300, 0)")
      .call(imaginaryAxis);
  }, [props.store]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: 600, height: 600 }}>
        {props.store.zeigerarray.map((zeiger, index) => {
          let betrag = Math.sqrt(zeiger.real ** 2 + zeiger.imaginary ** 2);
          let angle = Math.atan(zeiger.imaginary / zeiger.real);
          if (zeiger.real > 0 && zeiger.imaginary < 0) {
            angle = Math.atan(zeiger.imaginary / zeiger.real) + 2 * Math.PI;
          } else if (zeiger.real < 0) {
            angle = Math.atan(zeiger.imaginary / zeiger.real) + Math.PI;
          }
          console.log(betrag, angle);
          return (
            <div
              className="absolute"
              style={{
                width: scaleReal(betrag) - 300,
                top: 297.5,
                left: 300,
                height: 5,
                backgroundColor: "red",
                transformOrigin: "left",
                transform: `rotate(${-angle}rad)`,
              }}
              key={index}
            >
              <div
                className="absolute right-0"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "15px solid transparent",
                  borderBottom: "15px solid transparent",
                  borderLeft: "25px solid red",
                  transform: "translate(3.5px, -12.5px)",
                }}
              ></div>
            </div>
          );
        })}
        <svg id="zeiger_svg" height="600px" width="600px" ref={svg}></svg>
      </div>
    </div>
  );
}
