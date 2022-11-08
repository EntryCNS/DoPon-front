import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { server } from "../../../config.json";
import { Text } from "react-native";

const WebViewScreen = ({ navigation }) => {
  const [token, setToeken] = useState();
  AsyncStorage.getItem("access_token").then((data) => {
    setToeken(data);
  });
  useLayoutEffect(() => {
    AsyncStorage.getItem("access_token").then((data) => {
      setToeken(data);
    });
  }, []);
  return (
    <>
      {token !== undefined ? (
        <WebView
          source={{
            uri: `${server}/fintech/oauth`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }}
          onError={() => {
            navigation.navigate("main");
          }}
          on
        ></WebView>
      ) : (
        <Text>loading...</Text>
      )}
    </>
  );
};

export default WebViewScreen;
