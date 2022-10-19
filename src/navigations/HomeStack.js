import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home";
import WebViewScreen from "../components/common/webView/webView";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={Home} />
      <HomeStack.Screen name="webView">
        {(props) => (
          <WebViewScreen navigation={props.navigation}></WebViewScreen>
        )}
      </HomeStack.Screen>
    </Stack.Navigator>
  );
};
