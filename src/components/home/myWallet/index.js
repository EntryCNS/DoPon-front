import React, { useState } from "react";
import { PageSlider } from "@pietile-native-kit/page-slider";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Container = styled.View`
  width: 100%;
  height: 300px;
`;

const Card = styled.View`
  width: 313px;
  border-radius: 20px;
  height: 168px;
  background-color: ${(props) => props.color};
  padding: 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const AddButton = styled.Button`
  width: 20px;
  height: 168px;
  color: red;
`;

const Text = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;

const card = [
  {
    id: 1,
    account: "1111-11-1234567",
    monney: "2,433,000",
    type: "저축통장",
    color: "#FF4A4A",
  },
  {
    id: 2,
    account: "1111-11-1234567",
    monney: "2,433,000",
    type: "저축통장",
    color: "#54BAB9",
  },
  {
    id: 3,
    account: "1111-11-1234567",
    monney: "2,433,000",
    type: "저축통장",
    color: "orange",
  },
];
const MyWallet = ({ navigation }) => {
  const [selectedPage, setSelectedPage] = useState(0);
  console.log(navigation);
  return (
    <Container>
      <Text style={{ color: "#000", marginBottom: "5%", fontSize: 20 }}>
        내 지갑
      </Text>
      <PageSlider
        pageMargin={-30}
        peek={0}
        mode="card"
        selectedPage={selectedPage}
        onCurrentPageChange={setSelectedPage}
      >
        {card.map((item, idx) => {
          return (
            <Card key={idx} color={item.color}>
              <Text>{item.type}</Text>
              <Text style={{ marginBottom: "5%" }}>{item.account}</Text>
              <Text style={{ fontSize: 24, textAlign: "center" }}>
                {item.monney}원
              </Text>
              <TouchableOpacity></TouchableOpacity>
            </Card>
          );
        })}
      </PageSlider>
      <AddButton
        title="go to webView"
        onPress={() => {
          navigation.navigate("webView");
        }}
      />
    </Container>
  );
};

export default MyWallet;
