import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type LineChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function LineChart(props: LineChartProps) {
  return <FathymChart type="line" options={{}} {...props} />;
}
