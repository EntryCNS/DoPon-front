import React from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const HomeIcon = ({ props }) => {
  return (
    <FontAwesomeIcon
      name={"home"}
      size={30}
      color={props.focused ? "#538EE5" : "#BCBCBC"}
    />
  );
};

export const AnalyticsIcon = ({ props }) => {
  return (
    <MaterialIcons
      name={"analytics"}
      size={30}
      color={props.focused ? "#538EE5" : "#BCBCBC"}
    />
  );
};

export const PlanIcon = ({ props }) => {
  return (
    <MaterialIcons
      name={"calendar-today"}
      size={30}
      color={props.focused ? "#538EE5" : "#BCBCBC"}
    />
  );
};

export const MenuIcon = ({ props }) => {
  return (
    <MaterialIcons
      name={"menu"}
      size={30}
      color={props.focused ? "#538EE5" : "#BCBCBC"}
    />
  );
};
