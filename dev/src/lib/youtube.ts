const axios = require("axios");
import { AxiosRequestConfig, AxiosResponse } from "axios";

export const youtube: any = async (url: string) => {
  interface Payload {
    k_query: string;
    k_page: string;
    hl: string;
    q_auto: number;
  }

  const payload: Payload = {
    k_query: url,
    k_page: "home",
    hl: "id",
    q_auto: 0,
  };

  const options: AxiosRequestConfig = {
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Sec-Ch-Ua":
        '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      Cookie:
        "_ga=GA1.1.1785880904.1723306133; _ga_79G1567X4W=GS1.1.1723949738.7.0.1723949738.0.0.0",
      Origin: "https://id-y2mate.com",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.post(
      "https://id-y2mate.com/mates/analyzeV2/ajax",
      payload,
      options
    );
    return await response.data;
  } catch (error) {
    console.error("Error making the request:", error);
  }
};
