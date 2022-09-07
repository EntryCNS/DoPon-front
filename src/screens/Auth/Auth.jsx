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
  text: {
    color: "#fff"
  }
});

const Auth = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.all}>
      <Image source={AuthImage}/>
      <Text>당신의 소비생활은{'\n'}건강하신가요?</Text>
      <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
          navigation.navigate("SignIn");}}>
        <Text style={styles.text}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.signupButton} onPress={() => {
          navigation.navigate("SignIn");}}>
        <Text style={styles.text}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
