import React, { useState } from "react";
import { Text } from "react-native";
import { Button } from "react-native";
import styled from "styled-components/native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 275px;
  border-radius: 20;
  background-color: #fff;
`;

const MonthConSimption = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-top: 20px;
`;

const data = [
  { month: "3월", amount: 1000 },
  { month: "4월", amount: 16500 },
  { month: "5월", amount: 14250 },
  { month: "6월", amount: 1000 },
  { month: "7월", amount: 13000 },
];

const Consumption = () => {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth() + 1);
  return (
    <Container>
      <MonthConSimption>{month}월의 소비금액은 1111원</MonthConSimption>
      <AntDesign name="caretdown" />
      <VictoryChart width={350} height={250}>
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 12 },
          }}
        />

        <VictoryBar
          barWidth={30}
          cornerRadius={{ top: 8, bottom: 8 }}
          data={data}
          x="month"
          y="amount"
          events={[
            {
              target: "data",
              eventHandlers: {
                onPressIn: () => setNum((prev) => prev + 1),
              },
            },
          ]}
        />
      </VictoryChart>
    </Container>
  );
};

export default Consumption;
