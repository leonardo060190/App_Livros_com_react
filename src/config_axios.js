import axios from 'axios';

//criar uma instâcia Axios com a URL do Backend
//baseURL é a porta que está rodando o backend
export const api = axios.create({
    baseURL: 'http://localhost:3001'
});
