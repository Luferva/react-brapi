import axios from "axios";


export const BrApi = () => {
    return axios.create({
        baseURL: 'https://brapi.dev/api/',
    })
};