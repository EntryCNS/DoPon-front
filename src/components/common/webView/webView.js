import React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  return <WebView source={{ uri: "https://www.youtube.com/" }}></WebView>;
};

export default WebViewScreen;
