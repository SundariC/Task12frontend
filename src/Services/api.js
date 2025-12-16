import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api"
});

api.interceptors.request.use(
    (config) => {
         if (!config.url.includes("forgot-password") && !config.url.includes("reset-password")) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
        // const token = localStorage.getItem("token");
        // if(token){
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config;
    },
    (error) => Promise.reject(error)
)

export default api;
