import axios from "axios";

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
axios.defaults.headers.common['Accept'] = 'application/json'