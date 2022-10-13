import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import customAxios from "../../lib/customAxios";

const Width = Dimensions.get("window").width; // 스크린 너비 초기화
const Height = Dimensions.get("window").height; // 스크린 높이 초기화

const SignUp = ({ navigation }) => {
  const [birth, setBirth] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp(birthday, name, email, password) {
    console.log(birthday, name, email, password);
    const data = await customAxios.post("/auth/sign-up", {
      birthday,
      name,
      email,
      password,
    });
    return data;
  }

  return (
    <View style={styles.all}>
      <View style={styles.all_input}>
        <Text style={styles.default_text}>생년월일</Text>
        <TextInput
          style={styles.input}
          placeholder="202005050526"
          onChangeText={setBirth}
          value={birth}
          maxLength={8}
        />
        <Text style={styles.default_text}>이름</Text>
        <TextInput
          style={styles.input}
          placeholder="홍길동"
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.default_text}>이메일</Text>
        <TextInput
          style={styles.input}
          placeholder="1234@gmail.com"
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.default_text}>비밀번호</Text>
        <TextInput
          style={styles.input}
          placeholder="8자리 이상"
          onChangeText={setPassword}
        />
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("SignIn");
            signUp(birth, name, email, password)
              .then(() => {
                navigation.navigate("SignIn");
                alert("회원가입 성공하였습니다");
              })
              .catch(() => {
                alert("회원가입 성공하였습니다");
              });
          }}
        >
          <Text style={styles.login_text}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <Text>
        <Text style={styles.default_text}>아직 회원이신가요?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.blue_text}>로그인</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    height: Height,
    width: Width,

    position: "relative",

    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    width: 280,
    height: 57,

    backgroundColor: "#538EE6",
    borderRadius: 15,

    marginTop: 35,

    justifyContent: "center",
    alignItems: "center",
  },
  login_text: {
    fontSize: 17,
    color: "#fff",
  },
  default_text: {
    marginTop: 10,

    color: "#BCBCBC",
  },
  all_input: {
    height: 360,

    marginTop: 70,

    justifyContent: "space-between",
  },
  input: {
    backgroundColor: "#FFFFFF",

    width: 280,
    height: 57,

    borderRadius: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bcbcbc",

    paddingLeft: 15,
  },
  line: {
    width: Width,
    height: 1,

    marginTop: 50,
    marginBottom: 24,

    backgroundColor: "#BCBCBC",
  },
  blue_text: {
    color: "#538EE5",

    paddingLeft: 7,
  },
});

export default SignUp;
