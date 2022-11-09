import Graph from "./PieGraph";
import styled from "styled-components/native";
import Category from "../Category";

const PieGraph = () => {
  return (
    <Container>
      <TitleText>카테고리 분석</TitleText>
      <Graph />
      <Category />
    </Container>
  );
};

export default PieGraph;

const Container = styled.View`
  z-index: -1;
  margin-top: 40px;
  position: relative;
  width: 350px;
  height: auto;
  border-radius: 20px;
  background-color: #fff;
`;

const TitleText = styled.Text`
  color: #434343;
  margin: 30px 0 0 30px;
  font-weight: 700;
  font-size: 20px;
`;
