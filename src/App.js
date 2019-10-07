import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ChartistGraph from "react-chartist";

import "../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, RadialChart } from "react-vis";

import { Doughnut } from "react-chartjs-2";

var simpleLineChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
};

const data2 = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 }
];

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react-chartjs-2</h2>
          <Doughnut data={data} />
          <h2>react-vis</h2>
          <XYPlot height={300} width={300}>
            <LineSeries data={data2} />
          </XYPlot>
          <RadialChart
            data={[{ angle: 1 }, { angle: 5 }, { angle: 2 }]}
            width={300}
            height={300}
            innerRadius={100}
          />
          <h2>react-chartist</h2>
          <ChartistGraph data={simpleLineChartData} type={"Line"} />
        </header>
      </div>
    );
  }
}

export default App;
