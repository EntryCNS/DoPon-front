import { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/AntDesign";
import DropDownBtn from "./DropDownBtn";
import DropDownSelect from "./DropDownSelect";
import { dropDownState } from "../../../../store/dropDown";
import { useRecoilValue } from "recoil";
const MonthDropDown = ({ title, setMonthIndex }) => {
  const openDropDown = useRecoilValue(dropDownState);

  return (
    <>
      <DropDownBtn title={title} />
      {openDropDown && <DropDownSelect setMonthIndex={setMonthIndex} />}
    </>
  );
};

export default MonthDropDown;
