import axios from "axios";


const baseURL = "http://localhost:3001/api/poems"

//return a list of poem records
const getList = () => {
    return axios.get(baseURL, {
        headers: {
            'bob': 'Bobalooba'
        }
    })
        .then(response => response.data)
}

//return the specific poem with given id
const getPoem = (newPoem) => {
    return axios.get(baseURL + "/" + newPoem.id)
        .then(response => response.data)
}

//adds a new poem to the poems list
const addList = (newPoem) => {
    return axios.post(baseURL, newPoem, {
        headers: {
            'bob': 'Bobalooba'
        }
    })
        .then(response => response.data)
}

//adds an upvote for the poem with specific id
const updateVotes = (newPoem) => {
    return axios.post(baseURL + "/" + newPoem.id, newPoem, {
        headers: {
            'bob': 'Bobalooba'
        }
    })
        .then(response => response.data)
}

export default { getList, getPoem, addList, updateVotes }