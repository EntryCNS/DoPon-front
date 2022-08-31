import React from "react";
import styled from "styled-components/native";
import Consumption from "./Consumption";
const Container = styled.ScrollView`
  display: flex;
  padding: 12px;
  background: #e5e5e5;
  width: 100%;
`;
const Analytics = () => {
  return (
    <Container>
      <Consumption />
    </Container>
  );
};

export default Analytics;
