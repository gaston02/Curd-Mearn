import axios from 'axios'
import {API} from '../config.js';

export const registerRquest = user => axios.post(`${API}/register`, user);