
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='bg-red-300 p-4 m-3 text-center text-opacity-20 '>React samajh nhi aa rahi</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App