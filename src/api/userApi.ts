import axios from "axios";
const userApi = axios.create({
    baseURL: "",
});

export default userApi;