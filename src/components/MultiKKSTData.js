import { getMultiKKSTData } from '../services/kkst-api'
import{ useState, useEffect } from 'react'
import IndvKKSTData from './IndvKKSTData'
import Create from './CreateKKSTData'
import { Link } from 'react-router-dom'

export default function MultiKKSTData() {
    const [multiKKSTData, setMultiKKSTData] = useState([])
    useEffect(()=>{
        getMultiKKSTData() // calling the function to get the data
        .then(res => setMultiKKSTData(res.data))
    }, [])


    console.log(multiKKSTData)
    return(
        
      <div>
      <h1>Welcome to the Kool Kid Slang translator site</h1>
      
    {multiKKSTData.sort((a,b) => a.Phrase.localeCompare(b.Phrase)).map((IndvKKSTData) => {
      return (
          <Link to={`/${IndvKKSTData._id}`}>
              <h3>
              {IndvKKSTData.Phrase}
            </h3></Link>
      )
    })}
    <Create />
  </div>
    )
}