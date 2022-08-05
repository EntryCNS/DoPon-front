import React from "react";
import { Text, Button, View } from "react-native";

const Auth = ({ navigation }) => {
  return (
    <View>
      <Button
        title="SignIn"
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      />
      <Button
        title="SignUp"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};

export default Auth;
