import React from "react";
import styled from "styled-components/native";
import Consumption from "./Consumption";
const Container = styled.View`
  display: flex;
  padding: 12px;
  background: #fafafa;
  width: 100%;
  height: 100%;
`;
const Analytics = () => {
  return (
    <Container>
      <Consumption />
    </Container>
  );
};

export default Analytics;
