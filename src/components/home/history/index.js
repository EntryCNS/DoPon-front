import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 24px;
  height: 390px;
`;

const History = () => {
  return (
    <Container>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>거래내역</Text>
    </Container>
  );
};

export default History;
