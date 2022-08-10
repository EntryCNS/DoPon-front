import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  padding-top: 80px;
  margin-left: 36px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #434343;
  margin-bottom: 28px;
`;

const Card = styled.View`
  width: 303px;
  height: 123px;
  background: #ffffff;
  border-radius: 15px;
  margin: 0 auto;
  margin-bottom: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;
const CardPrice = styled.Text`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 8px;
`;
const CardPeriod = styled.Text`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #bcbcbc;
`;

const Plan = () => {
  return (
    <View>
      <Title>계획</Title>
      <Card>
        <CardTitle>가방</CardTitle>
        <CardPrice>2,085,396</CardPrice>
        <CardPeriod>2022.03.22 ~ 2022.08.01</CardPeriod>
      </Card>
      <Card>
        <CardTitle>가방</CardTitle>
        <CardPrice>2,085,396</CardPrice>
        <CardPeriod>2022.03.22 ~ 2022.08.01</CardPeriod>
      </Card>
      <Card>
        <CardTitle>가방</CardTitle>
        <CardPrice>2,085,396</CardPrice>
        <CardPeriod>2022.03.22 ~ 2022.08.01</CardPeriod>
      </Card>
    </View>
  );
};

export default Plan;
