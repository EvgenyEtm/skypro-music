import { useState, useEffect } from 'react'
import * as S from './App.Styles.jsx'
import { AppRoutes } from './routes.jsx'
import { getTracks } from './Api.jsx'

function App() {
  // const [user, setUser] = useState(false)
  // function userLogin() {
  //   localStorage.setItem('token', true)
  //   const token = localStorage.getItem('token')
  //   setUser(token)
  // }
  const [singles, setSingles] = useState('')
  const [arrayTrack, setArrayTrack] = useState([])

  useEffect(() => {
    async function getAllTracks() {
      try {
        const setResponse = await getTracks()
        console.log(setResponse)

        setArrayTrack(setResponse)
      } catch (error) {
        console.warn(error.message)
      }
    }
    getAllTracks()
  }, [])

  return (
    <S.Container>
      <S.GlobalStyled />
      <AppRoutes
        singles={singles}
        setSingles={setSingles}
        arrayTrack={arrayTrack}
        setArrayTrack={setArrayTrack}
      />
    </S.Container>
  )
}

export default App
console.log(localStorage)
