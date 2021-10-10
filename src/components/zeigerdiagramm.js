import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export default function Zeigerdiagramm(props) {
  const maxBetrag = d3.max(props.store.zeigerarray, (zeiger) => zeiger.betrag);

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

    d3.select("#zeiger-svg")
      .append("g")
      .attr("class", "axis-zeiger")
      .attr("transform", "translate(0, 300)")
      .call(realAxis);
    d3.select("#zeiger-svg")
      .append("g")
      .attr("class", "axis-zeiger")
      .attr("transform", "translate(300, 0)")
      .call(imaginaryAxis);
  }, [props.store, imaginaryAxis, realAxis]);

  return (
    <div className="flex flex-col items-center mb-20">
      <div className="relative" style={{ width: 600, height: 600 }}>
        {props.store.zeigerarray.map((zeiger, index) => {
          return (
            <div
              className="absolute"
              style={{
                width: scaleReal(zeiger.betrag) - 300,
                top: 297.5,
                left: 300,
                height: 5,
                backgroundColor: "red",
                transformOrigin: "left",
                transform: `rotate(${-zeiger.angle}rad)`,
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
              <div
                className="absolute right-0 -top-10 font-bold"
                style={{ transform: `rotate(${zeiger.angle}rad)` }}
              >
                U{index}
              </div>
            </div>
          );
        })}
        <svg id="zeiger-svg" height="600px" width="600px" ref={svg}></svg>
      </div>
    </div>
  );
}
