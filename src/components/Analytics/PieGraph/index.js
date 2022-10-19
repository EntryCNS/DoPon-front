import Graph from "./Graph/Graph";
import Legend from "./Graph/Legend";
import styled from "styled-components/native";
import { Text } from "react-native";
const Container = styled.View`
  margin-top: 40px;
  display: flex;
  /* align-items: flex-start; */
  position: relative;
  width: 350px;
  height: 400px;
  border-radius: 20px;
  background-color: #fff;
`;

const PieGraph = () => {
  return (
    <Container>
      <Text>카테고리 분석</Text>
      <Graph />
    </Container>
  );
};

export default PieGraph;
