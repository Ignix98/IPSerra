import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function Component({
  tags,
  countLabel,
  chartLabel,
}: {
  countLabel: string;
  chartLabel: string;
  tags: {
    value: string;
    count: number;
  }[];
}) {
  const chartConfig = { count: { label: countLabel, color: "hsl(var(--chart-1))" } } satisfies ChartConfig;

  return (
    <Card role="region" aria-label={chartLabel} className={"min-w-[375px] w-full"}>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={tags}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="value"
              tickLine={false}
              axisLine={false}
              tickMargin={9}
              minTickGap={2}
              tickFormatter={(value) => {
                return value.length < 10 ? value : value.slice(0, 6) + "...";
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="count"
                  labelFormatter={(value) => {
                    return value;
                  }}
                />
              }
            />
            <Bar dataKey="count" fill="var(--color-count)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default Component;
