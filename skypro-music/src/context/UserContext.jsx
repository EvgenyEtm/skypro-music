import { createContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { useState } from 'react'
import { getTracks } from '../Api'

export const UserContext = createContext(null)

export const useUserContext = () => {
  return useContext(UserContext)
}

export const LocalContext = ({ children }) => {
  const [singles, setSingles] = useState('')
  const [isLoadind, setIsLoadind] = useState(null)
  const [arrayTrack, setArrayTrack] = useState([])
  const [isLoginMode, setIsLoginMode] = useState(true)

  useEffect(() => {
    async function getAllTracks() {
      try {
        const setResponse = await getTracks()
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

  const navigate = useNavigate()
  const logoutButton = () => {
    localStorage.clear()
    setSingles(false)
    setIsLoadind(null)
    navigate('/auth')
  }

  return (
    <UserContext.Provider
      value={{
        logoutButton,
        singles,
        setSingles,
        isLoadind,
        setIsLoadind,
        arrayTrack,
        setArrayTrack,
        isLoginMode,
        setIsLoginMode,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
