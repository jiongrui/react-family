import axios from "axios";
import config from "../../../config/index";

const instance = axios.create({
  baseURL: config.host,
  timeout: 5000
});

export default instance;
