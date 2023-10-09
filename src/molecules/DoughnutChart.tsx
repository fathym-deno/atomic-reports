import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type DoughnutChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function DoughnutChart(props: DoughnutChartProps) {
  return <FathymChart type="doughnut" options={{}} {...props} />;
}
