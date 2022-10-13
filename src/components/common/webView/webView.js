import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { server } from "../../../config.json";

const WebViewScreen = ({ token }) => {
  return (
    <WebView
      source={{
        uri: `${server}/fintech/oauth`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }}
    ></WebView>
  );
};

export default WebViewScreen;
