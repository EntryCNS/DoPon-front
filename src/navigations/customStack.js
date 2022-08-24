import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home";
import WebView from "../components/common/webView/webView";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("access_token").then((found) => {
      setToken(found);
    });
  }, []);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={Home} />
      <HomeStack.Screen name="webView">
        {(props) => <WebView token={token}></WebView>}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
