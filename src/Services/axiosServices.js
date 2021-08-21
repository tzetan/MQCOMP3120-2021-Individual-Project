import axios from "axios";


const baseURL = "http://localhost:3001/api/poems"

const getList = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}

const addList = (newItem) => {
    return axios.post(baseURL, newItem)
        .then(response => response.data)
}


export default { getList, addList }