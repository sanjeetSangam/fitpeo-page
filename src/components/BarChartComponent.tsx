import { BarChart } from "@mui/x-charts";
import "react-circular-progressbar/dist/styles.css";

const BarChartComponent = () => {
	return (
		<BarChart
			xAxis={[
				{
					scaleType: "band",
					data: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
				},
			]}
			series={[
				{
					data: [1000, 3234, 533, 8787, 2323, 345, 3434, 345, 5645, 2234, 1213],
				},
				{
					data: [1532, 6565, 3987, 654, 8787, 2323, 345, 3434, 345, 5645, 7889],
				},
			]}
			height={250}
			borderRadius={100}
		></BarChart>
	);
};

export default BarChartComponent;
