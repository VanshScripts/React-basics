import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    console.log(userid);
  return (
    <div className='bg-gray-600 text-white text-3xl'> User:{userid} </div>
  )
}

export default User
