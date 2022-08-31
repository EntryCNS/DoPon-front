import React from "react";
import styled from "styled-components/native";
import HomeCom from "../components/home";
import AnalyticsCom from "../components/analytics";

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

const ScroolContainer = styled.ScrollView`
  flex: 1;
  background-color: #54b7f9;
`;

export const Home = () => {
  return (
    <ScroolContainer>
      <HomeCom />
    </ScroolContainer>
  );
};

export const Analytics = () => {
  return (
    <Container>
      <AnalyticsCom />
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
