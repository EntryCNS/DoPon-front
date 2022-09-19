import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import AuthImage from '../Images/AuthImage.png';
import GoogleImage from '../Images/Google.png';

const styles = StyleSheet.create({
  all: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    width: 280,
    height: 64,

    backgroundColor: '#538EE6',
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center"
  },
  signupButton: {
    width: 280,
    height: 64,

    backgroundColor: '#F08D8D',
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center"
  },
  main_image: {
    width: 320,
    height: 239,

    marginTop: 40,
    marginBottom: 42,
  },
  login_signup_button: {
    marginTop: 12,
    marginBottom: 42,
  },
  login_signup_text_size: {
    fontSize: 20,
    color: "#fff"
  },
  main_text: {
    marginBottom: 38,

    alignItems: 'center',
    justifyContent: 'center'
  },
  main_text_size: {
    fontSize: 27,
  },
  last_text: {
    display: "flex",
    flexDirection: "row",
  },
  google_image: {
    marginRight: 7,
  },
  last_text_size: {
    fontSize: 16,
    color: "#A1A1A1"
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

      <View style={styles.login_signup_button}>
        <TouchableOpacity activeOpacity={0.8} style={styles.signupButton} onPress={() => {
            navigation.navigate("SignUp");}}>
          <Text style={styles.login_signup_text_size}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.last_text}>
        <Image style={styles.google_image} source={GoogleImage}/>
        <Text style={styles.last_text_size}>구글 계정으로 로그인 / 회원가입 됩니다.</Text>
      </View>
    </View>
  );
};

export default Auth;
