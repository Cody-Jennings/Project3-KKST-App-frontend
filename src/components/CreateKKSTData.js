import { useNavigate } from 'react-router-dom'
import {createIndvKKSTData} from '../services/kkst-api'
import Button from 'react-bootstrap/Button'

function Create() {
    const nav = useNavigate()

    const createTheKKSTData = (e) => {
        //e.preventdefault()
        const translationData = {
            Phrase: e.target.phrase.value, 
            Translation: e.target.translation.value, 
            Example: e.target.example.value, 
            Author: e.target.author.value, 
            Date: e.target.date.value}
            console.log(translationData)
        createIndvKKSTData(translationData).then(() => {nav('/')})
        
    }

return(
    <div className='createFormDiv'>
        <h4>Create a Slang Phrase</h4><br></br>
        <form className='form' onSubmit={createTheKKSTData} autoComplete="off">
            <h5 className='createInput'>Phrase: <input className='createInput2' type='text' name='phrase' id='dsc'/></h5>
            <h5 className='createInput'>Translation: <input className='createInput2' type='text' name='translation' id='dsc'/></h5>
            <h5 className='createInput'>Example: <input className='createInput2' type='text' name='example' id='dsc'/></h5>
            <h5 className='createInput'>Author: <input className='createInput2' type='text' name='author' id='dsc'/></h5>
            <h5 className='createInput'>Date: <input className='createInput2' type='date' name='date' id='dsc'/></h5><br></br>
            
            <input type='submit' class="btn btn-success"/>
        </form>
    </div>
)
}

export default Create

