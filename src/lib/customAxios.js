import axios from "axios";
import config from "../config.json";
const customAxios = axios.create({ baseURL: config.server });

export default customAxios;
