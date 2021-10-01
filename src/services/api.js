import axios from "axios";

export const key = '17893c1a650d79618ae5b6dc431f0932';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;