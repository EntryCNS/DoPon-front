import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Plan, Analytics, Menu } from "../screens/TabScreens";
import { HomeStackScreen, PlanStackScreen } from "./customStack";
import {
  HomeIcon,
  AnalyticsIcon,
  PlanIcon,
  MenuIcon,
} from "../components/common/TabIcon/TabIcon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        labelPosition: "beside-icon",
        style: {
          backgroundColor: "#54b7f9",
          borderTopColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: (props) => <HomeIcon props={props} />,
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarLabel: "분석",
          tabBarIcon: (props) => <AnalyticsIcon props={props} />,
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanStackScreen}
        options={{
          tabBarLabel: "계획",
          tabBarIcon: (props) => <PlanIcon props={props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
