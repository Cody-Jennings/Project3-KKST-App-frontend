// All of our endpoints
import axios from 'axios'

const baseURL = 'http://localhost:3001/KKST-App'

// Show all
export const getMultiKKSTData = () => {
    const URL = baseURL // our base url
    const response = axios.get(URL) // using axios's get functionality
    return response
}

// Show one
export const getIndvKKSTData = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

// Edit the IndvKKSTData
export const editIndvKKSTData = (id, updatedIndvKKSTData) => {
    const URL = `${baseURL}/${id}`
    const response = axios.put(URL, updatedIndvKKSTData)
    return response
}   

// Create the IndvKKSTData
export const createIndvKKSTData = (translationData) => {
    const URL = baseURL
    const response = axios.post(URL, translationData)
    return response
}

// Delete the IndvKKSTData
export const deleteIndvKKSTData = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.delete(URL)
    return response
}