import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export class GenericService {
  protected readonly http: AxiosInstance;
  constructor(relativePath: string = "") {
    const baseURL = `${process.env.SERVER_URL}${relativePath}`;
    this.http = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    });

    // this._initializeRequestInterceptor();
  }

  // private _initializeRequestInterceptor() {
  //   this.http.interceptors.request.use((error) => {
  //     console.log(error);
  //     return Promise.reject(error);
  //   });
  // }
  // private _handleRequest(config: AxiosRequestConfig) {
  //   const token = getLocalToken();
  //   if (token) {
  //     config.headers = {
  //       ...config.headers,
  //       Authorization: `Bearer ${token}`,
  //     };
  //     return config;
  //   }
  // }
}

const getLocalToken = (): string => {
  return Cookies.get("token") || "";
};
