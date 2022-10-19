import {
  VictoryAxis,
  VictoryChart,
  VictoryContainer,
  VictoryPie,
} from "victory-native";
import Legend from "./Legend";
const Graph = () => {
  return (
    <>
      <VictoryChart width={240} height={240}>
        <VictoryAxis
          style={{
            axis: { display: "none" },
            tickLabels: { display: "none" },
          }}
        />
        <VictoryPie
          height={240}
          style={{
            labels: { display: "none" },
            position: "absolute",
          }}
          data={[
            { x: "기타", y: 35 },
            { x: "식비", y: 40 },
            { x: "교통", y: 55 },
            { x: "취미", y: 10 },
          ]}
          colorScale={["#538EE5", "#F08D8D", "#FFDD90", "#DBDBDB"]}
          innerRadius={45}
        />
        <Legend />
      </VictoryChart>
    </>
  );
};

export default Graph;
