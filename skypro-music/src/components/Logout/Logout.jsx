// import { UserContext } from '../../context/UserContext'
import * as S from './Logout.Styled'
// import { Link } from 'react-router-dom'
//import { useUserContext } from '../../context/UserContext'
import { clearToken } from '../../store/Slice/SliceAuth'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../store/Selectors/Selectors'

export const Logout = () => {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const logout = () => {
    dispatch(clearToken())
    nav('/auth')
  }
  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData.username)
  let user = useSelector(setUser)
  //user === undefined ? (user = userData) : user, nav('/auth')
  console.log(user)
  if (user === null) {
    user = userData
  }
  // if (user === null) {
  //   throw new Error('error userName')
  // }

  //const { logoutButton } = useUserContext()
  //const token = JSON.parse(localStorage.getItem('token'))
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
      <S.SidebarIcon>
        <S.SidebarSvg alt="logout" onClick={() => logout()} />
      </S.SidebarIcon>
    </S.SidebarPersonal>
  )
}
//onClick={logoutButton}
