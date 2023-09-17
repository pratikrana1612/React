import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const amounts = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max(...amounts);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMaximum}
          label={datapoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}
