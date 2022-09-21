import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import DoponImage from '../Images/Dopon.png';

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
    
    justifyContent: "center",
    alignItems: "center"
  },
  login_text: {
    fontSize: 17,
    color: "#fff"
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

    backgroundColor: "#BCBCBC"
  },
  blue_text: {
    color: "#538EE5"
  },
});

const SignIn = () => {
  return (
    <View style={styles.all}>
      <Image style={styles.dopon_image} source={DoponImage}/>

      <View>
        <Text style={styles.default_text}>이메일</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.default_text}>비밀번호</Text>
        <TextInput style={styles.input}/>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
            navigation.navigate("");}}>
          <Text style={styles.login_text}>로그인</Text>
        </TouchableOpacity>
      </View>

      <Text>
        <Text style={styles.default_text}>비밀번호를 잊으셨나요?</Text>
        <Text style={styles.blue_text}>비밀번호 찾기</Text>
      </Text>

      <View style={styles.line}/>

      <Text>
        <Text style={styles.default_text}>아직 회원이 아니신가요?</Text>
        <Text style={styles.blue_text}>회원가입</Text>
      </Text>
    </View>
  );
};

export default SignIn;