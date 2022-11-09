import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { css } from "styled-components/native";

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
  left: ${({ recommend }) => `${recommend}%`};

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
  ${({ color }) => colorStyle[color]};
  border-radius: 15px;

  width: ${({ current }) => `${current}%`};
`;

const colorStyle = {
  green: css`
    background-color: #99c298;
  `,
  blue: css`
    background-color: #538ee5;
  `,
  red: css`
    background-color: #f08d8d;
  `,
  yellow: css`
    background-color: #ffdd90;
  `,
  sky: css`
    background-color: #a9bede;
  `,
  blue2: css`
    background-color: #7392cd;
  `,
  gray: css`
    background-color: #cecece;
  `,
};

const Progress = ({ size, color, recommend, current }) => {
  return (
    <ProgressView>
      <Recommend recommend={recommend}>
        <RecommendText>권장</RecommendText>
      </Recommend>
      <ProgressMainBack size={size}>
        <ProgressMain color={color} current={current}></ProgressMain>
      </ProgressMainBack>
    </ProgressView>
  );
};

export default Progress;
