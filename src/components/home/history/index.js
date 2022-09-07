import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import useHistory from "../../../hooks/home/useHistory";

const Container = styled.View`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 24px;
  height: 390px;
`;
const ItemContainer = styled.View``;
const ItemBox = styled.View`
  width: 304px;
  height: 40px;
`;

const History = () => {
  // const { data } = useHistory();
  const data = [{ name: "정우재", amount: -12000, time: "18:10" }];
  return (
    <Container>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>거래내역</Text>
    </Container>
  );
};

export default History;
