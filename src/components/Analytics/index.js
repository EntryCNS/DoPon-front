import React from "react";
import styled from "styled-components/native";
import Consumption from "./Consumption";
import PieGraph from "./PieGraph";

const Container = styled.ScrollView`
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
      <PieGraph />
    </Container>
  );
};

export default Analytics;
