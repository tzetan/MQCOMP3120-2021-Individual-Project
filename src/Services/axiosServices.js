import axios from "axios";


const baseURL = "/api/poems"
const header = {
    headers: {
        'bob': 'Bobalooba'
    }
}

// return a list of poem records
const getList = () => {
    return axios.get(baseURL, header)
        .then(response => response.data)
}

// return the specific poem with given id
const getPoem = (newPoem) => {
    return axios.get(baseURL + "/" + newPoem.id)
        .then(response => response.data)
}

// adds a new poem to the poems list
const addList = (newPoem) => {
    return axios.post(baseURL, newPoem, header)
        .then(response => response.data)
}

// adds an upvote for the poem with specific id
const updateVotes = (newPoem) => {
    return axios.post(baseURL + "/" + newPoem.id, newPoem, header)
        .then(response => response.data)
}

export default { getList, getPoem, addList, updateVotes }