import React from "react";
import Navigator from "./src/Navigator";
import "react-native-gesture-handler";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Navigator />
      </RecoilRoot>
    </>
  );
};

export default App;
