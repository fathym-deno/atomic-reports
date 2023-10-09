import { FathymChart, FathymChartProps } from "./FathymChart.tsx";

export type BubbleChartProps = Omit<
  FathymChartProps,
  "type" | "options"
>;

export function BubbleChart(props: BubbleChartProps) {
  return <FathymChart type="bubble" options={{}} {...props} />;
}
