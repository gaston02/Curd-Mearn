import axios from 'axios'
import {API} from '../config.js';

const instance = axios.create({
    baseURL: API,
    withCredentials: true
})

export default instance