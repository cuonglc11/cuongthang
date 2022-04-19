import axios from "axios";
const createApi = () =>{
   axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
   axios.defaults.headers.common['Authorization'] = 'Auth Token'
   return axios
}

export default createApi

