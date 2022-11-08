import { useEffect, useState } from "react";
import styled from "styled-components/native";
import MonthDropDown from "./MonthDropDown";
import StickGraph from "./StickGraph";
// import DropDownPicker from "react-native-dropdown-picker";

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
  const [monthIndex, setMonthIndex] = useState(date.getMonth());
  const [selectedMonth, setSelectedMonth] = useState(allData[monthIndex]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setSelectedMonth(allData[monthIndex]);
  }, [monthIndex]);

  useEffect(() => {
    changeCurrentGraphData();
  }, [selectedMonth]);

  const changeCurrentGraphData = () => {
    let currentMonthIndex = selectedMonth.month.split("월")[0] * 1;
    console.log(currentMonthIndex);
    if (currentMonthIndex <= 3) {
      currentMonthIndex = 3;
    } else if (currentMonthIndex >= 11) {
      currentMonthIndex = 10;
    }
    const sliceData = allData.slice(
      currentMonthIndex - 3,
      currentMonthIndex + 2
    );
    console.log(sliceData);
    setData(sliceData);
  };

  return (
    <Container>
      <MonthDropDown
        title={selectedMonth.month}
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
        setMonthIndex={setMonthIndex}
      />
      <ChartContainer>
        <MonthConSimption>
          {selectedMonth.month}은 총{selectedMonth.amount}
          원을소비했어요
        </MonthConSimption>
        <StickGraph selectedMonth={selectedMonth} data={data} />
      </ChartContainer>
    </Container>
  );
};

export default Consumption;

const Container = styled.View``;

const ChartContainer = styled.View`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 275px;
  border-radius: 20px;
  background-color: #fff;
`;

const MonthConSimption = styled.Text`
  color: #434343;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-top: 20px;
`;
