import { useState, useEffect} from 'react'
import { getIndvKKSTData, deleteIndvKKSTData } from '../services/kkst-api'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        <div className='indvPage'>
            <h1> Kool Kids Slang Phrase:</h1><br></br>
            <h3 className='indvCSS'>Phrase : <span>{IndvKKSTData.Phrase}</span></h3>
            <h3 className='indvCSS'>Translation: <span>{IndvKKSTData.Translation}</span></h3>
            <h3 className='indvCSS'>Example: <span>{IndvKKSTData.Example}</span></h3>
            <h3 className='indvCSS'>Author: <span>{IndvKKSTData.Author}</span></h3>
            <h3 className='indvCSS'>Created Date: <span>{IndvKKSTData.Date}</span></h3><br></br>
            <Button className='indvButton' variant="secondary" onClick={() => {nav(`/${id}/edit`)}}>Edit</Button>
            <Button className='indvButton' variant="danger" onClick={deleteTheIndvKKSTData}>Delete</Button>
            <Button className='indvButton' onClick={() => {nav('/')}}>Main</Button>
        </div>
    )
}