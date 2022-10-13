import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/home";
import Plan from "../components/plan/Plan";
import PlusPlan from "../components/plan/PlusPlan";
import WebView from "../components/common/webView/webView";
const Stack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="main" component={Home} />
      <Stack.Screen name="webView" component={WebView} />
    </Stack.Navigator>
  );
};

export const PlanStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="plan" component={Plan} />
      <Stack.Screen name="plusPlan" component={PlusPlan} />
    </Stack.Navigator>
  );
};
