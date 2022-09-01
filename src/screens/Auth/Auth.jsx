import React from "react";
import { Text, Button, View } from "react-native";

const Auth = ({ navigation }) => {
  console.log(navigation);
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
