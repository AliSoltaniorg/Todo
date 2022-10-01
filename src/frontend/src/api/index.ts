import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../constants/endpoints";


const httpRequest = ()=>{
    return axios.create({
        baseURL:BASE_URL,
    })
}


export default httpRequest;