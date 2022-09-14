import React, { useEffect, useState } from "react";

import styled from "styled-components/native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";

const Container = styled.View``;
const DropDownContainer = styled.View`
  z-index: 333;
`;
const ChartContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 275px;
  border-radius: 20px;
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
  { month: "9월", amount: 13000 },
];

const Consumption = () => {
  useEffect(() => {
    makeItemData();
  }, [data]);

  const makeItemData = () => {
    data.forEach((data) => {
      const itemObject = {
        label: data.month,
        value: { month: data.month, amount: data.amount },
      };
      itemData.push(itemObject);
    });
  };

  const date = new Date();

  const [selectedMonth, setSelectedMonth] = useState(date.getMonth() + 1);
  const itemData = [];
  const [item, setItem] = useState(itemData);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <Container>
      <DropDownContainer>
        <DropDownPicker
          containerStyle={{ width: 130, border: "0" }}
          width="155px"
          placeholder={`${selectedMonth}월`}
          open={openDropDown}
          setOpen={setOpenDropDown}
          value={selectedMonth}
          setValue={setSelectedMonth}
          items={item}
        />
      </DropDownContainer>
      <ChartContainer>
        <MonthConSimption>
          {selectedMonth.month}월은 총 {selectedMonth.amount}원을소비했어요
        </MonthConSimption>
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
      </ChartContainer>
    </Container>
  );
};

export default Consumption;
