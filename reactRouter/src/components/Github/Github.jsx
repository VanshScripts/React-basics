import React from 'react'
import { useEffect , useState } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/VanshScripts')
        .then(res=>res.json())
        .then(resultData => {console.log(resultData)
          setData(resultData)
        })

    } , [])
  return (
    <div className='text-center m-5 text-3xl p-4 bg-violet-400'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300}></img>
    </div>
  )
}

export default Github
