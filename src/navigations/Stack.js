import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import Auth from "../screens/Auth/Auth";
import SignUp from "../screens/Auth/SignUp";
const Stack = createStackNavigator();

const StackNavigation = ({ setIsLogined }) => {
  return (
    <Stack.Navigator initialRouteName="firstScreen" screenOptions={{}}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="SignIn">
        {(props) => <SignIn setIsLogined={setIsLogined}></SignIn>}
      </Stack.Screen>
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
