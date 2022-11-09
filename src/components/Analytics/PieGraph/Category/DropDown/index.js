import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import src from "../../../../../../assets/Analytics0.png";
const DropDown = ({ item, index }) => {
  return (
    <DropDownContainer>
      <ImgTitleContainer>
        <Image source={require(`../../../../../../assets/Analytics0.png`)} />
        <TitlePercentContainer>
          <DropDownTitle>{item.title}</DropDownTitle>
          <DropDownPercent>{item.percent}</DropDownPercent>
        </TitlePercentContainer>
      </ImgTitleContainer>
      <DropDownBill>{item.bill}</DropDownBill>
    </DropDownContainer>
  );
};

export default DropDown;
const ImgTitleContainer = styled.View`
  flex-direction: row;
`;
const DropDownContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 280px;
  height: 40px;
  margin-bottom: 28px;
  align-items: center;
`;

const TitlePercentContainer = styled.View`
  margin-left: 10px;
  justify-content: space-between;
`;
const DropDownTitle = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;

const DropDownPercent = styled.Text`
  color: #bcbcbc;
`;

const DropDownBill = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
`;
