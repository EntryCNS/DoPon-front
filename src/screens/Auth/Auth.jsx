import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import AuthImage from '../Images/AuthImage.png';

const styles = StyleSheet.create({
  all: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    width: 303,
    height: 64,
    backgroundColor: '#538EE6',
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  signupButton: {
    width: 303,
    height: 64,
    backgroundColor: '#F08D8D',
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  main_image: {
    width: 320,
    height: 239,
    marginTop: 30,
    marginBottom: 42,
  },
  login_signup_text: {
    marginTop: 20,
    marginBottom: 40,
  },
  login_signup_text_size: {
    fontSize: 20,
    color: "#fff"
  },
  main_text: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main_text_size: {
    fontSize: 28
  },
  last_text_size: {
    fontSize: 16
  },
});

const Auth = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.all}>
      <Image style={styles.main_image} source={AuthImage}/>

      <View style={styles.main_text}>
        <Text style={styles.main_text_size}>당신의 소비생활은</Text>
        <Text style={styles.main_text_size}>건강하신가요?</Text>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
            navigation.navigate("SignIn");}}>
          <Text style={styles.login_signup_text_size}>로그인</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.login_signup_text}>
        <TouchableOpacity activeOpacity={0.8} style={styles.signupButton} onPress={() => {
            navigation.navigate("SignIn");}}>
          <Text style={styles.login_signup_text_size}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.last_text_size}>구글 계정으로 로그인 / 회원가입 됩니다.</Text>
    </View>
  );
};

export default Auth;
