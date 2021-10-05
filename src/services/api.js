import axios from "axios";

// Insert api_key generated from https://developers.themoviedb.org/3/getting-started/introduction
export const key = '';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;