import React from "react";
import styled from "styled-components/native";
import PlanPage from "../components/plan/Plan";
import PlusPlan from "../components/plan/PlusPlan";
import HomeCom from "../components/home";
import AnalyticsCom from "../components/Analytics";

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
  return <PlusPlan />;
};

// export const Menu = () => {
//   return (
//     <Container>
//       <StyledText>전체</StyledText>
//     </Container>
//   );
// };
