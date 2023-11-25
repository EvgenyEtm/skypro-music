import * as S from './Logout.Styled'
import { Link } from 'react-router-dom'

export const Logout = () => {
  const logout = () => {
    localStorage.clear()
  }
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
      <S.SidebarIcon>
        <Link to="/login">
          <S.SidebarSvg alt="logout" onClick={logout} />
        </Link>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  )
}
