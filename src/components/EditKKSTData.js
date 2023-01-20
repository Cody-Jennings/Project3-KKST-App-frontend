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
        const updatedIndvKKSTData = {phrase: e.target.phrase.value, translation: e.target.phrase.value, example: e.target.phrase.value}
        editIndvKKSTData(id, updatedIndvKKSTData)
        nav(`/${id}`)
    }
    return(
        <div>
            <form onSubmit={editTheIndvKKSTData}>
            Phrase:<input type='text' name='phrase' defaultValue={data.phrase} />
            Translation:<input type='text' name='translation' defaultValue={data.translation} />
            Example:<input type='text' name='example' defaultValue={data.example} />
            <input type='submit' />   
            </form>
        </div>
    )
}