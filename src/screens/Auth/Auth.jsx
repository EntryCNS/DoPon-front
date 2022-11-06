import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import AuthImage from "../Images/AuthImage.png";
import { Dimensions } from "react-native";

const Width = Dimensions.get("window").width; // 스크린 너비 초기화
const Height = Dimensions.get("window").height; // 스크린 높이 초기화

const Auth = ({ navigation }) => {
  return (
    <View style={styles.all}>
      <Image style={styles.main_image} source={AuthImage} />

      <View style={styles.main_text}>
        <Text style={styles.main_text_size}>당신의 소비생활은</Text>
        <Text style={styles.main_text_size}>건강하신가요?</Text>
      </View>

      <View style={styles.login_signup_button}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={styles.login_signup_text}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.signupButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.login_signup_text}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    height: Height,
    width: Width,

    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    width: 280,
    height: 64,

    backgroundColor: "#538EE6",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    width: 280,
    height: 64,

    backgroundColor: "#F08D8D",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
  },
  main_image: {
    width: 320,
    height: 239,
  },
  login_signup_button: {
    height: 143,
    width: 280,

    display: "flex",
    justifyContent: "space-between",
  },
  login_signup_text: {
    fontSize: 20,
    color: "#fff",
  },
  main_text: {
    marginTop: 30,
    marginBottom: 30,

    alignItems: "center",
    justifyContent: "center",
  },
  main_text_size: {
    fontSize: 27,
  },
});

export default Auth;
