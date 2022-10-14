import axios from "axios";
import { control } from "../utils/util";


const baseURL = 'http://localhost:8090/'

export const userConfig = axios.create({
    baseURL: baseURL,
    
})


export const siteConfig = axios.create({
    baseURL: baseURL,
    headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})

