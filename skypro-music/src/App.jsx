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
  const [isLoadind, setIsLoadind] = useState(null)
  useEffect(() => {
    async function getAllTracks() {
      try {
        const setResponse = await getTracks()
        console.log(setResponse)
        setIsLoadind(null)
        setArrayTrack(setResponse)
      } catch (error) {
        console.warn(error.message)
        setIsLoadind(
          `${error.message}, Ошибка сервера, повторите запрос позднее.`,
        )
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
        isLoadind={isLoadind}
        setIsLoadind={setIsLoadind}
      />
    </S.Container>
  )
}

export default App
console.log(localStorage)
