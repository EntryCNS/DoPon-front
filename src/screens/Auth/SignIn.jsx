import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import DoponImage from "../Images/Dopon.png";
import { Dimensions } from "react-native";
import customAxios from "../../lib/customAxios";

const Width = Dimensions.get("window").width; // 스크린 너비 초기화
const Height = Dimensions.get("window").height; // 스크린 높이 초기화

const SignIn = ({ navigation }) => {
  async function signIn(email_or_id, password) {
    const data = await customAxios.post("auth/sign-in", {
      email_or_id,
      password,
    });
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.all}>
      <Image style={styles.dopon_image} source={DoponImage} />

      <View style={styles.email_password}>
        <View>
          <Text style={styles.default_text}>이메일</Text>
          <TextInput style={styles.input} onChangeText={setEmail} />
        </View>
        <View>
          <Text style={styles.default_text}>비밀번호</Text>
          <TextInput style={styles.input} onChangeText={setPassword} />
        </View>
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButton}
          onPress={() => {
            signIn(email, password);
          }}
        >
          <Text style={styles.login_text}>로그인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <Text>
        <Text style={styles.default_text}>아직 회원이 아니신가요?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.blue_text}>회원가입</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  all: {
    height: Height,
    width: Width,

    position: "relative",

    alignItems: "center",
    justifyContent: "center",
  },
  dopon_image: {
    marginTop: 100,
    marginBottom: 30,
  },
  loginButton: {
    width: 280,
    height: 57,

    backgroundColor: "#538EE6",
    borderRadius: 15,

    marginTop: 50,

    justifyContent: "center",
    alignItems: "center",
  },
  login_text: {
    fontSize: 17,
    color: "#fff",
  },
  default_text: {
    marginBottom: 8,

    color: "#BCBCBC",
  },
  email_password: {
    height: 173,

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

    marginTop: 100,
    marginBottom: 24,

    backgroundColor: "#BCBCBC",
  },
  blue_text: {
    color: "#538EE5",

    paddingLeft: 7,
  },
});
