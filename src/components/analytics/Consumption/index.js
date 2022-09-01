import React, { useEffect, useState } from "react";

import styled from "styled-components/native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";
const Container = styled.View``;

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
  { month: "7월", amount: 13000 },
];

const Consumption = () => {
  // useEffect(() => {
  //   findMonthData();
  // }, [data]);

  //data에 month 정보만 따로 모아주는 함수
  // const findMonthData = () => {
  //   const monthArray = [];
  //   const amountArray = [];
  //   data.forEach((d) => {
  //     monthArray.push(d.month);
  //     amountArray.push(d.amount);
  //   });
  //   setMonthData(monthArray);
  //   setAmountData(amountArray);
  // };

  // const [monthData, setMonthData] = useState([]);
  // const [amountData, setAmountData] = useState([]);

  useEffect(() => {
    makeItemData();
  }, [data]);

  const makeItemData = () => {
    data.forEach((data) => {
      const itemObject = {
        label: data.month,
        value: `${data.month} ${data.amount}`,
      };
      itemData.push(itemObject);
    });
  };

  const date = new Date();

  const [value, setValue] = useState(date.getMonth() + 1);
  const itemData = [];
  const [item, setItem] = useState(itemData);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <Container>
      <DropDownPicker
        placeholder={`${value}월`}
        open={openDropDown}
        setOpen={setOpenDropDown}
        value={value}
        setValue={setValue}
        items={item}
        setItems={setItem}
      />
      <ChartContainer>
        <MonthConSimption>
          {value.split(" ")[0]}의 소비금액은 {value.split(" ")[1]}원
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
