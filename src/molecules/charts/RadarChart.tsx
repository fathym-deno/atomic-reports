import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type RadarChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function RadarChart(props: RadarChartProps) {
  return <FathymChart type="radar" options={{}} {...props} />;
}
