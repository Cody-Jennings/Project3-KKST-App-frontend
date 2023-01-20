import { useNavigate } from 'react-router-dom'
import {createIndvKKSTData} from '../services/kkst-api'

function Create() {
    const nav = useNavigate()

    const createTheKKSTData = (e) => {
        const kkstdata = {phrase: e.target.phrase.value, translation: e.target.tranlation.value, example: e.target.example.value}
        createIndvKKSTData(kkstdata)
        nav('/')
    }

return(
    <div>
        <h4>Create a Slang Phrase</h4>
        <form onSubmit={createTheKKSTData}>
            <input type='text' name='description' id='dsc'/>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create