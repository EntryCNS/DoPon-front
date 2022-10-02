import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import useHistory from "../../../hooks/home/useHistory";

const History = () => {
  const { data } = useHistory();
  return (
    <Container>
      <TitleText fontSize="18px" fontWeight="700">
        거래내역
      </TitleText>
      <ItemContainer>
        {data.map(({ day, month, item }, idx) => (
          <View key={idx}>
            <StyledText
              color="#BCBCBC"
              fontSize="12px"
            >{`${month}월 ${day}일`}</StyledText>
            <ItemBox>
              {item.map(({ amount, time, name, money, type }, idx) => (
                <Item key={idx}>
                  <ImageBox>{/* <Image source /> */}</ImageBox>
                  <ItemText color="#434343" fontSize="16px" top="0" left="54px">
                    {name}
                  </ItemText>
                  <ItemText
                    color="#BCBCBC"
                    fontSize="12px"
                    top="20px"
                    left="54px"
                  >
                    {time}
                  </ItemText>
                  <MoneyText
                    color="#434343"
                    fontSize="16px"
                    top="0"
                    left="234px"
                    type={type}
                  >
                    {money}원
                  </MoneyText>
                  <ItemText
                    color="#BCBCBC"
                    fontSize="12px"
                    top="20px"
                    left="234px"
                  >
                    {amount}원
                  </ItemText>
                </Item>
              ))}
            </ItemBox>
          </View>
        ))}
      </ItemContainer>
    </Container>
  );
};

export default History;

const Container = styled.View`
  width: 95%;
  background-color: #fff;
  border-radius: 20px;
  padding: 24px;
`;
const ItemContainer = styled.View`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ItemBox = styled.View`
  position: relative;
  width: 304px;
  margin-top: 16px;
`;
const Item = styled.View`
  width: 304px;
  margin-bottom: 24px;
`;

const StyledText = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;

const TitleText = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 18px;
`;
const ItemText = styled.Text`
  position: absolute;
  font-weight: 500;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
const MoneyText = styled(ItemText)`
  color: ${(props) => (props.type == "plus" ? "#F08D8D" : "#434343")};
`;
const ImageBox = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #fac109;
`;
const Image = styled.Image``;
