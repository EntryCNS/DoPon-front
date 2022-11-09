import { VictoryLegend } from "victory-native";

const Legend = () => {
  return (
    <>
      <VictoryLegend
        style={{
          position: "absolute",
          labels: { fontSize: 14 },
        }}
        y={60}
        x={220}
        data={[
          { name: "기타 62%", symbol: { fill: "#538EE5", type: "square" } },
          { name: "식사 18%", symbol: { fill: "#F08D8D", type: "square" } },
          { name: "교통 14%", symbol: { fill: "#FFDD90", type: "square" } },
          { name: "취미 6%", symbol: { fill: "#DBDBDB", type: "square" } },
        ]}
      />
    </>
  );
};

export default Legend;
