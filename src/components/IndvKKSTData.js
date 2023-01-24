import { useState, useEffect} from 'react'
import { getIndvKKSTData, deleteIndvKKSTData } from '../services/kkst-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function IndvKKSTData() {
    const nav = useNavigate()//this is us setting up our return to main page
    const {id} = useParams()// destructing the id parameter for use
    const [IndvKKSTData, setKKSTData] = useState({})// setting up our state

    useEffect(() => {
        getIndvKKSTData(id)//getting the one KKSTData using the id
    .then(res => setKKSTData(res.data))}, [])

    const deleteTheIndvKKSTData = () => {
        deleteIndvKKSTData(id).then(() => {nav('/')})//delete function goes here
        
    }
    return(
        <div>
            <h1> Kool Kids Slang Phrase:</h1>
            <h3>Phrase: {IndvKKSTData.Phrase}</h3>
            <h3>Translation: {IndvKKSTData.Translation}</h3>
            <h3>Example: {IndvKKSTData.Example}</h3>
            <h3>Author: {IndvKKSTData.Author}</h3>
            <h3>Created Date: {IndvKKSTData.Date}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheIndvKKSTData}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}