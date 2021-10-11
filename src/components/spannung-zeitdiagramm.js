import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function SpannungZeitdiagramm(props) {
  const maxBetrag = d3.max(
    props.store.zeigerarray,
    (zeiger) => zeiger.absolute
  );

  const svgHeight = 600;
  const svgPadding = 50;
  const viewedTime = 0.02;
  const frequency = props.store.frequency; // in ms

  const scaleSpannung = d3
    .scaleLinear()
    .domain([-1 * maxBetrag - maxBetrag * 0.1, maxBetrag + maxBetrag * 0.1])
    .range([600, 0]);

  const spannungAxis = d3.axisLeft().scale(scaleSpannung);

  const zeitSVG = useRef(null);

  useEffect(() => {
    const scaleTime = d3
      .scaleLinear()
      .domain([0, viewedTime])
      .range([svgPadding, zeitSVG.current.getBoundingClientRect().width]);

    const timeAxis = d3.axisBottom().scale(scaleTime);

    d3.selectAll(".axis-spannung").remove();
    d3.selectAll(".spannung-zeit-path").remove();

    d3.select("#spannung-svg")
      .append("g")
      .attr("class", "axis-spannung")
      .attr("transform", `translate(0, 300)`)
      .call(timeAxis);

    d3.select("#spannung-svg")
      .append("g")
      .attr("class", "axis-spannung")
      .attr("transform", `translate(${svgPadding}, 0)`)
      .call(spannungAxis);

    for (let zeiger of props.store.zeigerarray) {
      const sine = d3.range(0, viewedTime, 0.0001).map((t) => {
        return [
          t,
          zeiger.absolute *
            Math.sin(2 * Math.PI * frequency * t + zeiger.angle),
        ];
      });

      const line = d3
        .line()
        .context(null)
        .x(function (d) {
          return scaleTime(d[0]);
        })
        .y(function (d) {
          return scaleSpannung(d[1]);
        });

      d3.select("#spannung-svg")
        .append("g")
        .attr("class", "spannung-zeit-path")
        .append("path")
        .attr("d", line(sine))
        .attr("stroke", zeiger.color)
        .attr("fill", "none")
        .attr("stroke-width", "5");
    }
  }, [props.store, frequency, scaleSpannung, spannungAxis]);

  return (
    <div className="flex flex-col items-center">
      <svg
        id="spannung-svg"
        className="w-full"
        height={svgHeight}
        ref={zeitSVG}
      ></svg>
    </div>
  );
}
