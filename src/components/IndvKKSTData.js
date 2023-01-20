import { useState, useEffect} from 'react'
import { getIndvKKSTData, deleteIndvKKSTData } from '../services/kkst-api'
import { useParams, useNavigate } from 'react-router-dom'

export default function IndvKKSTData() {
    const nav = useNavigate()//this is us setting up our return to main page
    const {id} = useParams()// destructing the id parameter for use
    const [IndvKKSTData, setKKSTData] = useState({})

    useEffect(() => {
        getIndvKKSTData(id)//getting the one KKSTData using the id
    .then(res => setKKSTData(res.data))}, [])

    const deleteTheIndvKKSTData = () => {
        deleteIndvKKSTData(id)//delete function goes here
        nav('/')
    }
    return(
        <div>
            <h1> Kool Kids Slang Phrase:</h1>
            <h3>{IndvKKSTData.phrase}</h3>
            <h3>{IndvKKSTData.translation}</h3>
            <h3>{IndvKKSTData.example}</h3>
            <button onClick={() => {nav(`/${id}/edit`)}}>Edit</button>
            <button onClick={deleteTheIndvKKSTData}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}