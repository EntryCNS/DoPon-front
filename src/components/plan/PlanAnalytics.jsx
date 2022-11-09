import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Progress from "./Progress";

const PlanAnalyticsStyle = styled.ScrollView`
  height: 606px;
  width: 351px;
  margin: 0 auto;
  background-color: white;

  border-radius: 15px;
`;
const Title = styled.Text`
  padding-top: 80px;
  margin-left: 36px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Back = styled.View`
  margin-top: 27px;
  margin-left: 36px;
  margin-bottom: 12px;

  background-color: blue;

  width: 24px;
  height: 24px;
`;

const Analytics = styled.View`
  width: 85%;
  margin: 0 auto;
`;

const Production = styled.View`
  min-width: 141px;
  height: 96px;
`;

const ProductionName = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #434343;
`;

const ProductionDes = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #434343;
`;

const ProductionMoney = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  color: #434343;
`;

const Header = styled.View`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  flex-direction: row;

  margin-bottom: 18px;
`;

const SaveButton = styled.View`
  border: 1px solid #f08d8d;
  border-radius: 15px;
  width: 108px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Button`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #f08d8d;
`;

const Today = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;

  margin-top: 18px;
`;

const TodayTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #434343;
`;

const TodayMoney = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: right;
  letter-spacing: -0.02em;

  color: #434343;
`;

const Kategory = styled.View`
  margin-top: 24px;
`;

const KategoryTitle = styled.Text`
  /* font-family: "Noto Sans KR"; */
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #434343;
`;

const KategoryEach = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  width: 303px;

  margin-top: 28px;
`;

const KategoryLogo = styled.View`
  width: 40px;
  height: 100%;
`;

const KategoryIconContainer = styled.View`
  width: 24px;
  height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const KategoryIcon = styled.Text``;

const LogoImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #538ee5;
`;
const LogoText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  margin: 0 auto;
`;

const PlanAnalytics = ({ navigation }) => {
  return (
    <>
      <Title>내 계획</Title>
      <PlanAnalyticsStyle>
        <Back></Back>
        <Analytics>
          <Header>
            <Production>
              <ProductionName>가방 을/를</ProductionName>
              <ProductionDes>사기 위해 남은 금액</ProductionDes>
              <ProductionMoney>3,083,202 원</ProductionMoney>
            </Production>
            <SaveButton>
              <ButtonText title="저금하기" color="#f08d8d" />
            </SaveButton>
          </Header>
          <Progress size="lg" />
          <Today>
            <TodayTitle>오늘 권장 소비</TodayTitle>
            <TodayMoney>80,000원</TodayMoney>
          </Today>
          <Today>
            <TodayTitle>오늘 총 소비</TodayTitle>
            <TodayMoney>120,500 원</TodayMoney>
          </Today>
          <Kategory>
            <KategoryTitle>카테고리별 소비 계획</KategoryTitle>
            {/* 1 */}
            <KategoryEach>
              <KategoryLogo>
                <LogoText>기타</LogoText>
                <LogoImage></LogoImage>
              </KategoryLogo>
              <Progress size="md" />
              <KategoryIconContainer>
                <KategoryIcon>+</KategoryIcon>
              </KategoryIconContainer>
            </KategoryEach>
            {/* 2 */}
            <KategoryEach>
              <KategoryLogo>
                <LogoText>기타</LogoText>
                <LogoImage></LogoImage>
              </KategoryLogo>
              <Progress size="md" />
              <KategoryIconContainer>
                <KategoryIcon>+</KategoryIcon>
              </KategoryIconContainer>
            </KategoryEach>
            {/* 3 */}
            <KategoryEach>
              <KategoryLogo>
                <LogoText>기타</LogoText>
                <LogoImage></LogoImage>
              </KategoryLogo>
              <Progress size="md" />
              <KategoryIconContainer>
                <KategoryIcon>+</KategoryIcon>
              </KategoryIconContainer>
            </KategoryEach>
            {/* 4 */}
            <KategoryEach>
              <KategoryLogo>
                <LogoText>기타</LogoText>
                <LogoImage></LogoImage>
              </KategoryLogo>
              <Progress size="md" />
              <KategoryIconContainer>
                <KategoryIcon>+</KategoryIcon>
              </KategoryIconContainer>
            </KategoryEach>
            {/* 5 */}
            <KategoryEach>
              <KategoryLogo>
                <LogoText>기타</LogoText>
                <LogoImage></LogoImage>
              </KategoryLogo>
              <Progress size="md" />
              <KategoryIconContainer>
                <KategoryIcon>+</KategoryIcon>
              </KategoryIconContainer>
            </KategoryEach>
          </Kategory>
        </Analytics>
      </PlanAnalyticsStyle>
    </>
  );
};

export default PlanAnalytics;
