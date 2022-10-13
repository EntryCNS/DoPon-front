import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native";
// import Icon from "react-native-vector-icons/AntDesign";
import DropDownPicker from "react-native-dropdown-picker";

const Container = styled.View`
  position: relative;
`;

// const DropDown = styled.View`
//   margin: 40px 0 26px 36px;
// `;

// const DropDownText = styled.Text`
//   color: #434343;
//   font-weight: 700;
//   font-size: 18px;
// `;

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

const allData = [
  { month: "1월", amount: 1020 },
  { month: "2월", amount: 16500 },
  { month: "3월", amount: 14250 },
  { month: "4월", amount: 100 },
  { month: "5월", amount: 13000 },
  { month: "6월", amount: 2900 },
  { month: "7월", amount: 16000 },
  { month: "8월", amount: 13000 },
  { month: "9월", amount: 10550 },
  { month: "10월", amount: 10000 },
  { month: "11월", amount: 1500 },
  { month: "12월", amount: 11000 },
];

const Consumption = () => {
  const date = new Date();

  const [selectedMonth, setSelectedMonth] = useState(allData[date.getMonth()]);
  const itemData = [];
  const [item, setItem] = useState(itemData);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [data, setData] = useState([]);

  //DropDwonPicker 데이터 변환 코드 {label : 값 , value: {month : 달, amount : 소비금약}}
  const makeItemData = () => {
    allData.forEach((data) => {
      const itemObject = {
        label: data.month,
        value: { month: data.month, amount: data.amount },
      };
      itemData.push(itemObject);
    });
  };

  useEffect(() => {
    makeItemData();
  }, [data]);

  useEffect(() => {
    changeGraphData();
  }, []);

  const changeGraphData = () => {
    let currentMonthIndex = selectedMonth.month.split("월")[0] * 1;
    if (currentMonthIndex <= 3) {
      currentMonthIndex = 3;
    } else if (currentMonthIndex >= 11) {
      currentMonthIndex = 10;
    }
    const sliceData = allData.slice(
      currentMonthIndex - 3,
      currentMonthIndex + 2
    );
    console.log("sD", sliceData);
    setData(sliceData);
  };

  return (
    <Container>
      <DropDownPicker
        style={{
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)",
        }}
        dropDownContainerStyle={{
          padding: 10,
          width: 200,
          position: "absolute",
          top: 400,
          zIndex: 333,
        }}
        containerStyle={{ width: 130 }}
        width="155px"
        placeholder={selectedMonth.month}
        open={openDropDown}
        setOpen={setOpenDropDown}
        value={selectedMonth}
        setValue={setSelectedMonth}
        items={item}
        setItems={setItem}
        onChangeValue={changeGraphData}
      />
      <ChartContainer>
        <MonthConSimption>
          {selectedMonth.month}은 총{selectedMonth.amount}
          원을소비했어요
        </MonthConSimption>

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
