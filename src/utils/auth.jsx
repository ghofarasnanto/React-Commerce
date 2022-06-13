import axios from "axios";
import BASE_URL from "../BASE_URL";

export const loginAuth = (body) => {
  const URL = `${BASE_URL}/auth/signin`;
  const results = axios.post(URL, body);
  return results;
};
