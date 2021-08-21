import axios from "axios";


const baseURL = "http://localhost:3001/api/poems"

const getList = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}

const addList = (newPoem) => {
    return axios.post(baseURL, newPoem)
        .then(response => response.data)
}

const updateVotes = (newPoem) => {
    return axios.put(baseURL + "/" + newPoem.id, newPoem)
        .then(response => response.data)
}

export default { getList, addList, updateVotes }