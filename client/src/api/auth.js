import axios from 'axios'
import {API} from '../config.js';

export const registerRquest = user => axios.post(`${API}/register`, user);
export const loginRquest = user => axios.post(`${API}/login`, user);