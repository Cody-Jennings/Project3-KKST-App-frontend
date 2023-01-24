import { useNavigate } from 'react-router-dom'
import {createIndvKKSTData} from '../services/kkst-api'

function Create() {
    const nav = useNavigate()

    const createTheKKSTData = (e) => {
        const translationData = {
            Phrase: e.target.phrase.value, 
            Translation: e.target.translation.value, 
            Example: e.target.example.value, 
            Author: e.target.author.value, 
            Date: e.target.date.value}
        createIndvKKSTData(translationData)
        nav('/')
    }

return(
    <div>
        <h4>Create a Slang Phrase</h4>
        <form onSubmit={createTheKKSTData} autocomplete="off">
            Phrase: <input type='text' name='phrase' id='dsc'/><br></br>
            Translation: <input type='text' name='translation' id='dsc'/><br></br>
            Example: <input type='text' name='example' id='dsc'/><br></br>
            Author: <input type='text' name='author' id='dsc'/><br></br>
            Date: <input type='date' name='date' id='dsc'/>
            
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create

