import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import Auth from "../screens/Auth/Auth";
import SignUp from "../screens/Auth/SignUp";
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="firstScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
