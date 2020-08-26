import React from "react";
import { Chart } from "react-charts";

const Skills = () => {
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { position: "bottom", type: "linear", stacked: true },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        label: "Skills",
        data: [
          ["Go", 70],
          ["NodeJs", 65],
          ["Python", 85],
          ["Swift/IOS", 45],
          ["Rust", 25],
          ["React", 35],
          ["Angular", 80],
          ["Postgres", 70],
          ["MongoDB", 70],
          ["Circleci", 60],
          ["Docker", 80],
          ["Kubernetes", 65],
          ["AWS", 40],
        ],
      },
    ],
    []
  );

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <Chart data={data} series={series} axes={axes} tooltip dark />
    </div>
  );
};

export default Skills;
