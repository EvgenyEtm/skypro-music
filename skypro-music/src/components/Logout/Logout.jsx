// import { UserContext } from '../../context/UserContext'
import * as S from './Logout.Styled'
// import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/UserContext'

export const Logout = () => {
  const { logoutButton } = useUserContext()
  const token = JSON.parse(localStorage.getItem('token'))
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{token.username}</S.SidebarPersonalName>
      <S.SidebarIcon>
        <S.SidebarSvg alt="logout" onClick={logoutButton} />
      </S.SidebarIcon>
    </S.SidebarPersonal>
  )
}
