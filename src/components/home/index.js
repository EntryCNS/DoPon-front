import React from "react";
import MyWallet from "./myWallet";
import History from "./history";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  /* padding-top: 80px; */
  /* padding-left: 20px; */
  padding: 80px 0 50px 20px;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: #fafafa;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <MyWallet navigation={navigation} />
      <History />
    </Container>
  );
};

export default Home;
