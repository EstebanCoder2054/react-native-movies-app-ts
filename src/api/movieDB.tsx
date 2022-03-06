import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ae67c32f94d5b27cd1460070b0ddee62',
        language: 'en-ES',
    }
})

export default movieDB;