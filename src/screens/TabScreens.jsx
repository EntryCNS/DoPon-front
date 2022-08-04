import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #54b7f9;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;

export const Home = () => {
  return (
    <Container>
      <StyledText>홈</StyledText>
    </Container>
  );
};

export const Analytics = () => {
  return (
    <Container>
      <StyledText>분석</StyledText>
    </Container>
  );
};

export const Plan = () => {
  return (
    <Container>
      <StyledText>계획</StyledText>
    </Container>
  );
};

export const Menu = () => {
  return (
    <Container>
      <StyledText>전체</StyledText>
    </Container>
  );
};
