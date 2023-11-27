import * as S from './Logout.Styled'
import { Link } from 'react-router-dom'

export const Logout = ({ setSingles, setIsLoadind }) => {
  const logoutButton = () => {
    localStorage.clear()
    setSingles(false)
    setIsLoadind(null)
  }
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <S.SidebarIcon>
        <Link to="/login">
          <S.SidebarSvg alt="logout" onClick={logoutButton} />
        </Link>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  )
}
