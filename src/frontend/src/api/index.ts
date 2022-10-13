import axios from 'axios';
import { BASE_URL } from '../constants/endpoints';

const httpRequest = () => {
    return axios.create({
        baseURL: BASE_URL + 'api/',
        timeout: 10000,
    });
};

export default httpRequest;
