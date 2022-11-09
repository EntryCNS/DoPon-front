import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const ProgressView = styled.View`
  position: relative;
  height: 60px;
`;

const Recommend = styled.View`
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 15px;

  height: 24px;
  width: 40px;

  position: absolute;
  top: 0;
  left: 20%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RecommendText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  color: #434343;
`;

const ProgressMainBack = styled.View`
  background: #fafafa;
  border-radius: 15px;

  width: ${(prop) => (prop.size === "md" ? "203px" : "303px")};
  height: 28px;

  margin-top: 32px;
`;

const ProgressMain = styled.View`
  height: 100%;
  background: #538ee5;
  border-radius: 15px;

  width: 20%;
`;

const Progress = ({ size }) => {
  return (
    <ProgressView>
      <Recommend>
        <RecommendText>권장</RecommendText>
      </Recommend>
      <ProgressMainBack size={size}>
        <ProgressMain></ProgressMain>
      </ProgressMainBack>
    </ProgressView>
  );
};

export default Progress;
