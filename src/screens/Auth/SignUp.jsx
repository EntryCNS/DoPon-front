import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  all: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  default_text: {
    color: "#BCBCBC",
  },
  dopon_image: {
    marginTop: 120,
    marginBottom: 30
  },
  loginButton: {
    width: 280,
    height: 57,

    backgroundColor: '#538EE6',
    borderRadius: 15,

    marginTop: 35,
    
    justifyContent: "center",
    alignItems: "center"
  },
  login_text: {
    fontSize: 17,
    color: "#fff"
  },
  all_input: {
    marginTop: 75
  },
  input: {
    backgroundColor: '#FFFFFF',

    width: 280,
    height: 57,

    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#bcbcbc',

    marginTop: 10,
    marginBottom: 15,

    paddingLeft: 15
  },
  line: {
    width: "100%",
    height: 1,

    marginTop: 50,
    marginBottom: 24,

    backgroundColor: "#BCBCBC"
  },
  blue_text: {
    color: "#538EE5",

    paddingLeft: 7
  },
});

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.all}>
      <View style={styles.all_input}>
        <Text style={styles.default_text}>생년월일</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.default_text}>이름</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.default_text}>이메일</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.default_text}>비밀번호</Text>
        <TextInput style={styles.input}/>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
            navigation.navigate("");}}>
          <Text style={styles.login_text}>회원가입</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line}/>

      <Text>
        <Text style={styles.default_text}>아직 회원이신가요?</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("SignIn");
        }}><Text style={styles.blue_text}>로그인</Text></TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUp;
