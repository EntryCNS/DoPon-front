import React from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  all: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {

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
  }
});

const SignIn = () => {
  return (
    <View style={styles.all}>
      <Text>Login</Text>

      <TextInput style={styles.input} placeholder="Id"/>
      <TextInput style={styles.input} placeholder="password"/>

      <View>
        <TouchableOpacity activeOpacity={0.8} style={styles.loginButton} onPress={() => {
            navigation.navigate("SignIn");}}>
          <Text style={styles.login_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
