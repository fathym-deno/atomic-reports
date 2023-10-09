import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type PolarChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function PolarChart(props: PolarChartProps) {
  return <FathymChart type="polarArea" options={{}} {...props} />;
}
