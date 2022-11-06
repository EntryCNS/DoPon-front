import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { WebView } from "react-native-webview";
import { server } from "../../../config.json";

const WebViewScreen = ({ token }) => {
  const tk =
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkZXZlbHJldHIwQGdtYWlsLmNvbSIsInR5cGUiOiJ3b3dpbG92ZWl0IiwiaWF0IjoxNjY1NzAzMzEwLCJleHAiOjE2NjY3MDMzMTB9.XwhnUB7PKuc0qhKjRDxqhkRFBk0xts215sf-MdATHw4";
  return (
    <WebView
      source={{
        uri: `${server}/fintech/oauth`,
        headers: {
          Authorization: `Bearer ${tk}`,
        },
      }}
    ></WebView>
  );
};

export default WebViewScreen;
