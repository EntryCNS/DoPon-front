import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home";
import WebView from "../components/common/webView/webView";
const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="main" component={Home} />
      <HomeStack.Screen name="webView" component={WebView} />
    </HomeStack.Navigator>
  );
};
