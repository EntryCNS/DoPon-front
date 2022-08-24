import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigations/Tab";
import StackNavigation from "./navigations/Stack";

const Navigator = () => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <NavigationContainer>
      {!isLogined ? (
        <StackNavigation setIsLogined={setIsLogined} />
      ) : (
        <TabNavigation />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
