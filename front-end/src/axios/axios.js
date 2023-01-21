import axios from "axios";
const BaseURL = "http://localhost:8080/api"

export default axios.create({
    baseURL: BaseURL
})