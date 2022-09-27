import React, { useState } from "react";
import AuthApi from "../../api/Auth.api";
import styled from "styled-components/native";

const StyleInput = styled.TextInput`
  border: 1px solid #000;
  width: 300px;
  font-size: 20px;
  padding: 10px;
  margin-top: 20px;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const SignInBtn = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Text = styled.Text``;
const SignIn = ({ setIsLogined }) => {
  const [emailOrId, setEmailOrId] = React.useState("");
  const [password, setPassword] = React.useState(null);
  return (
    <>
      <Container>
        <StyleInput
          onChangeText={setEmailOrId}
          value={emailOrId}
          placeholder="email 또는 id를 입력해주세요"
        />
        <StyleInput
          onChangeText={setPassword}
          value={password}
          placeholder="비밀번호를 입력해주세요"
        />
        <SignInBtn
          onPress={async () => {
            const data = await AuthApi.trySignIn();
            console.log(data);
          }}
        >
          <Text>로그인</Text>
        </SignInBtn>
      </Container>
    </>
  );
};

export default SignIn;
