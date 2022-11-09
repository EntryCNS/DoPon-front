import React from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  height: 606px;
`;

const Title = styled.Text`
  padding-top: 80px;
  margin-left: 36px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #434343;
  margin-bottom: 28px;
`;

const CardContainer = styled.View`
  background: #ffffff;
  border-radius: 15px;
  width: 351px;
  height: 456px;

  margin: 0 auto;
`;

const Back = styled.View`
  margin-top: 27px;
  margin-left: 24px;
  margin-bottom: 12px;

  background-color: blue;

  width: 24px;
  height: 24px;
`;

const Input = styled.TextInput`
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 15px;

  height: 40px;
  padding-left: 24px;
`;

const Label = styled.View`
  height: 60px;
  margin: 0 auto;
  width: 303px;

  margin-bottom: 18px;
`;

const LabelText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  color: #bcbcbc;

  margin-bottom: 8px;
`;

const CardTitle = styled.Text`
  margin: 24px;
  margin-bottom: 18px;
  margin-top: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #434343;
`;

const LabelContainer = styled.View`
  display: flex;

  flex-direction: row;

  position: relative;
  left: 80px;
`;

const InputFlex = styled.TextInput`
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 15px;

  height: 40px;
  padding-left: 24px;

  width: 137px;
`;

const Plus = styled.View`
  height: 64px;
  width: 303px;
  background: #538ee6;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;

  margin-top: 30px;
`;

const PlusText = styled.Text`
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

const PlusButton = styled.Button`
  color: white;
  width: 100%;
`;

const PlusPlan = ({ navigation }) => {
  return (
    <Container>
      <Title>계획</Title>
      <CardContainer>
        <Back></Back>
        <CardTitle>계획 추가</CardTitle>
        <Label>
          <LabelText>상품명</LabelText>
          <Input />
        </Label>
        <Label>
          <LabelText>가격</LabelText>
          <Input />
        </Label>
        <LabelContainer>
          <Label>
            <LabelText>시작 날짜</LabelText>
            <InputFlex />
          </Label>
          <Label>
            <LabelText>종료 날짜</LabelText>
            <InputFlex />
          </Label>
        </LabelContainer>
        <Plus>
          <PlusButton
            title="추가하기"
            onPress={() => {
              navigation.navigate("plananalyics");
            }}
          >
            <PlusText>추가하기</PlusText>
          </PlusButton>
        </Plus>
      </CardContainer>
    </Container>
  );
};

export default PlusPlan;
