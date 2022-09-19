import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import DoponImage from '../Images/Dopon.png';

const styles = StyleSheet.create({
  all: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#BCBCBC",
  },
  loginButton: {
    width: 280,
    height: 64,

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
    height: 64,

    borderRadius: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#bcbcbc',

    paddingLeft: 15
  },
});

const SignIn = () => {
  return (
    <View style={styles.all}>
      <Image source={DoponImage}/>

      <View>
        <Text style={styles.text}>이메일</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.text}>비밀번호</Text>
        <TextInput style={styles.input}/>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
            navigation.navigate("SignIn");}}>
          <Text style={styles.login_text}>로그인</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>비밀번호를 잊으셨나요?</Text><Text>비밀번호 찾기</Text>
      </View>
    </View>
  );
};

export default SignIn;
