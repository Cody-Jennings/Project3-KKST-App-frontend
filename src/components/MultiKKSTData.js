import { getMultiKKSTData } from '../services/kkst-api'
import{ useState, useEffect } from 'react'
import IndvKKSTData from './IndvKKSTData'
import Create from './CreateKKSTData'

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
            <ul>
          {multiKKSTData.map((IndvKKSTData) => {
            return (
                <li><a href={`/${IndvKKSTData._id}`}>
                    <h3>
                    {IndvKKSTData.Phrase}
                  </h3></a></li>
            )
          })}
          </ul>
          <Create />
        </div>
    )
}