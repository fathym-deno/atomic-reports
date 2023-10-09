import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type PieChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function PieChart(props: PieChartProps) {
  return <FathymChart type="pie" options={{}} {...props} />;
}
