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
        const updatedIndvKKSTData = {Phrase: e.target.phrase.value, Translation: e.target.phrase.value, Example: e.target.phrase.value}
        editIndvKKSTData(id, updatedIndvKKSTData)
        nav(`/${id}`)
    }
    return(
        <div>
            Slang term have a new meaning? Edit below:<br></br>
            <form onSubmit={editTheIndvKKSTData}>
            Phrase:<input type='text' name='phrase' defaultValue={data.Phrase} /><br></br>
            Translation:<input type='text' name='translation' defaultValue={data.Translation} /><br></br>
            Example:<input type='text' name='example' defaultValue={data.Example} /><br></br>
            <input type='submit' />   
            </form>
        </div>
    )
}