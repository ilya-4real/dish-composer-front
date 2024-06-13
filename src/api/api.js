import axios from "axios";


const Api = axios.create({
    baseURL: "https://ilya4r.ru/api/"
})

export default Api;