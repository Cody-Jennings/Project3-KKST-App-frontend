import { getIndvKKSTData, editIndvKKSTData } from '../services/kkst-api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        <div className='editContainer'>
            <h1>Slang term have a new meaning?</h1><br></br>
            <h3>Edit below:</h3><br></br>
            <br></br><form className='editForm'onSubmit={editTheIndvKKSTData} autoComplete="off">
            <h4 className='editInput'>Phrase:<input className='phraseInput' type='text' name='phrase' defaultValue={data.Phrase} /></h4><br></br>
            <h4 className='editInput'>Translation:<input className='phraseInput' type='text' name='translation' defaultValue={data.Translation} /></h4><br></br>
            <h4 className='editInput'>Example:<input className='phraseInput' type='text' name='example' defaultValue={data.Example} /></h4><br></br>
            <h4 className='editInput'>Author:<input className='phraseInput' type='text' name='author' defaultValue={data.Author} /></h4><br></br>
            <h4 className='editInput'>Created Date:<input className='phraseInput' type='date' name='date' defaultValue={data.Date} /></h4><br></br>
            <br></br><input type='submit' class="btn btn-success" /><Button variant='primary' onClick={() => {nav('/')}}>Main</Button>   
            </form>
        </div>
    )
}
