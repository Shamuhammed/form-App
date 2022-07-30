import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://server',
   headers: {
      "API-KEY": "142"
   }
});

export const formAPI = {
   putFormApi(data) {
      return instance.post('endPoint', data);
   }
}