import { createContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { useState } from 'react'
import { getTracks } from '../Api'
import { getAllTracks } from '../store/Slice/SliceTracks'
import { useDispatch, useSelector } from 'react-redux'
import { allTracksSelector } from '../store/Selectors/Selectors'

export const UserContext = createContext(null)

export const useUserContext = () => {
  return useContext(UserContext)
}

export const LocalContext = ({ children }) => {
  const dispatch = useDispatch()
  // const [selectedSong, setSelectedSong] = useState('')
  //const [isPlaying, setIsPlaying] = useState(null)
  const [isLoadind, setIsLoadind] = useState(null)
  // const isLiked = useSelector(setIsLiked)
  const [isLoginMode, setIsLoginMode] = useState(true)
  useEffect(() => {
    async function getApiTracks() {
      try {
        const setResponse = await getTracks()
        setIsLoadind(null)
        dispatch(getAllTracks(setResponse))
        // setArrayTrack(setResponse)
      } catch (error) {
        console.warn(error.message)
        setIsLoadind(
          `${error.message}, Ошибка сервера, повторите запрос позднее.`,
        )
      }
    }
    getApiTracks()
  }, [dispatch])
  //const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  //const allTracks = useSelector(allTracksSelector)
  // console.log(allTracks)
  //const shuffle = useSelector(shuffleSelector)
  const arrayTrack = useSelector(allTracksSelector)

  const navigate = useNavigate()
  const logoutButton = () => {
    localStorage.clear()
    // setSelectedSong(false)
    setIsLoadind(null)
    navigate('/auth')
  }

  return (
    <UserContext.Provider
      value={{
        logoutButton,
        isLoadind,
        setIsLoadind,
        arrayTrack,
        isLoginMode,
        setIsLoginMode,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
