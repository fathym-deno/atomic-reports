import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type BarChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function BarChart(props: BarChartProps) {
  return <FathymChart type="bar" options={{}} {...props} />;
}
