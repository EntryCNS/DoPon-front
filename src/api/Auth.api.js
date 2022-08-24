import customAxios from "../lib/customAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Auth {
  async trySignIn(email_or_id, password) {
    try {
      const response = await customAxios.post(`/auth/sign-in`, {
        email_or_id,
        password,
      });
      console.log(response);
      if (response.status != 200) return false;

      await AsyncStorage.setItem("access_token", response.data.access_token);
      return true;
    } catch (e) {}
  }
}

export default new Auth();
