import React from "react";
import { Chart } from "react-google-charts";
import style from "./Graph.module.css"

export const data = [
  ["Task", "Hours per Day"],
  ["Project", 1],
  ["Classes", 2],
  ["Test", 2],
  ["assignment", 2],
  ["Active", 7],
];

export const options = {
  title: "Result",
};

export default function Graph() {
  return (
    <Chart
    className={style.Chart}
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
  );
}
