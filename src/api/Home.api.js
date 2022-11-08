import customAxios from "../lib/customAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Home {
  // async getHistory() {
  //   customAxios.get("/", () => {
  //     return data;
  //   });
  //   return "hi";
  // }
  async getHistory(year, month, page) {
    const token = await AsyncStorage.getItem("access_token");
    const data = await customAxios.get(
      `/finance/expenditures?year=${year}&month=${month}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  }
}

export default new Home();
