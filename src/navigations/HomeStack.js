import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home";
import WebView from "../components/common/webView/webView";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  const tk =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXZlbHJldHIwQGdtYWlsLmNvbSIsInR5cGUiOiJ3b3dpbG92ZWl0IiwiaWF0IjoxNjY1NzAzMzEwLCJleHAiOjE2NjY3MDMzMTB9.XwhnUB7PKuc0qhKjRDxqhkRFBk0xts215sf-MdATHw4";
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXZlbHJldHIwQGdtYWlsLmNvbSIsInR5cGUiOiJ3b3dpbG92ZWl0IiwiaWF0IjoxNjY1NzAzMzEwLCJleHAiOjE2NjY3MDMzMTB9.XwhnUB7PKuc0qhKjRDxqhkRFBk0xts215sf-MdATHw4"
  );

  useEffect(() => {
    // AsyncStorage.getItem("access_token").then((found) => {
    //   setToken(found);
    // });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={Home} />
      <HomeStack.Screen name="webView">
        {(props) => <WebView token={tk}></WebView>}
      </HomeStack.Screen>
    </Stack.Navigator>
  );
};
