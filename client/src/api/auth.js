import axios from "./axios.js"

export const registerRquest = user => axios.post(`/register`, user);
export const loginRquest = user => axios.post(`/login`, user);
export const verifyTokenRquest = () => axios.get('/verify');