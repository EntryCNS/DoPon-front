import axios from "axios";
import config from "../config.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
const customAxios = axios.create({
  baseURL: config.server,
  timeout: 1000,
});

export default customAxios;
