import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import StackNavigation from "./navigations/Stack";
const Navigator = () => {
  const isLogin = true;
  return (
    <NavigationContainer>
      {!isLogin ? <StackNavigation /> : <TabNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
