import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://padjadjaran-hub.herokuapp.com/api/",
});