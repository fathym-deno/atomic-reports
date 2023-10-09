import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type ScatterChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function ScatterChart(props: ScatterChartProps) {
  return <FathymChart type="scatter" options={{}} {...props} />;
}
