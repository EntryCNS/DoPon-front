import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { dropDownState } from "../../store/dropDown";
import styled from "styled-components/native";
import Consumption from "./Consumption";
import PieGraph from "./PieGraph/Graph";
import Category from "./PieGraph/Category";

const Analytics = () => {
  const isOpenDropDown = useRecoilValue(dropDownState);

  return (
    <Container
      showsVerticalScrollIndicator={false}
      scrollEnabled={!isOpenDropDown}
    >
      <Consumption />
      <PieGraph />
    </Container>
  );
};

export default Analytics;

const Container = styled.ScrollView`
  position: relative;
  padding: 12px;
  background: #fafafa;
  width: 100%;
  height: 100%;
`;
