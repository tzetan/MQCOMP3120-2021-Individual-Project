import axios from "axios";


const baseURL = "http://localhost:3001/api/poems"

const getAll = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}


export default { getAll }