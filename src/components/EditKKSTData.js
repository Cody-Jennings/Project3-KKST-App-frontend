import { getIndvKKSTData, editIndvKKSTData } from '../services/kkst-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditIndvKKSTData() {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getIndvKKSTData(id)//getting the one KKSTData that matches this id
    .then(res => setData(res.data))}, [])

    const editTheIndvKKSTData = e => {
        e.preventDefault()
        const updatedIndvKKSTData = {
            Phrase: e.target.phrase.value, 
            Translation: e.target.translation.value, 
            Example: e.target.example.value, 
            Author: e.target.author.value, 
            Date: e.target.date.value
        }
        
        editIndvKKSTData(id, updatedIndvKKSTData).then(() => {nav(`/${id}`)})
        
    }
    return(
        <div>
            Slang term have a new meaning? Edit below:<br></br>
            <form onSubmit={editTheIndvKKSTData} autoComplete="off">
            Phrase:<input type='text' name='phrase' defaultValue={data.Phrase} /><br></br>
            Translation:<input type='text' name='translation' defaultValue={data.Translation} /><br></br>
            Example:<input type='text' name='example' defaultValue={data.Example} /><br></br>
            Author:<input type='text' name='author' defaultValue={data.Author} /><br></br>
            Created Date:<input type='date' name='date' defaultValue={data.Date} /><br></br>
            <input type='submit' /><button onClick={() => {nav('/')}}>Main</button>   
            </form>
        </div>
    )
}
