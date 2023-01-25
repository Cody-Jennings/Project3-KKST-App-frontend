import { getMultiKKSTData } from '../services/kkst-api'
import { useState, useEffect } from 'react'
import Create from './CreateKKSTData'
import { Link } from 'react-router-dom'

export default function MultiKKSTData() {
  const [multiKKSTData, setMultiKKSTData] = useState([])
  useEffect(() => {
    getMultiKKSTData() // calling the function to get the data
      .then(res => setMultiKKSTData(res.data))
  }, [])


  console.log(multiKKSTData)
  return (

    <div className='multiContainer'>
      <h1>Welcome to the Kool Kid Slang translator app</h1><br></br>
      <h4>Are you an "old-soul" or "un-hip" by todays standards and wanting to understand the new and odd phrases?
        Look no further as this app will make you the koolest kid on the block!</h4><br></br>
      <ul className='multiUL'>
        {multiKKSTData.sort((a, b) => a.Phrase.localeCompare(b.Phrase)).map((IndvKKSTData) => {
          return (
            <li>
              <Link to={`/${IndvKKSTData._id}`}>
                <h3 className='phrase-link'>
                  {IndvKKSTData.Phrase}
                </h3>
              </Link>
            </li>
          )
        })}
      </ul><br></br>
      <Create />
    </div>
  )
}