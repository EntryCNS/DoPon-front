import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";

const StickGraph = ({ selectedMonth, data }) => {
  return (
    <VictoryChart width={350} height={250}>
      <VictoryAxis
        style={{
          axis: { stroke: "transparent" },
          ticks: { stroke: "transparent" },
          tickLabels: { fontSize: 12 },
        }}
      />
      <VictoryBar
        style={{
          data: {
            fill: ({ datum }) => {
              return datum.month === selectedMonth.month
                ? "#538EE5"
                : "#EFEFEF";
            },
          },
        }}
        barWidth={30}
        cornerRadius={{ top: 8, bottom: 8 }}
        data={data}
        x="month"
        y="amount"
      />
    </VictoryChart>
  );
};

export default StickGraph;
