import React from "react";
import styled from "styled-components/native";
import DropDown from "./DropDown";

const data = [
  {
    title: "기타",
    bill: "2,085,360원",
    percent: "62%",
    usageHistory: { name: "이름", time: "12:22", price: "-3000원" },
  },
  {
    title: "식비",
    bill: "685,360원",
    percent: "18%",
    usageHistory: { name: "이름", time: "12:22", price: "-3000원" },
  },
  {
    title: "교통",
    bill: "475,360원",
    percent: "14%",
    usageHistory: { name: "이름", time: "12:22", price: "-3000원" },
  },
  {
    title: "취미",
    bill: "285,360원",
    percent: "6%",
    usageHistory: { name: "이름", time: "12:22", price: "-3000원" },
  },
];
const Category = () => {
  return (
    <>
      <CategoryDropDownContainer>
        {data.map((item, i) => {
          return <DropDown item={item} index={i} />;
        })}
      </CategoryDropDownContainer>
    </>
  );
};

export default Category;

const CategoryDropDownContainer = styled.View`
  width: 100%;
  margin-left: 20px;
  margin-top: 200px;
`;
