import customAxios from "../lib/customAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home {
  async getHistory() {
    customAxios.get("/", () => {
      return data;
    });
    return "hi";
  }
}

export default new Home();
