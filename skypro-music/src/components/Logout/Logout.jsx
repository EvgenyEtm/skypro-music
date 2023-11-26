import * as S from './Logout.Styled'
import { Link } from 'react-router-dom'

export const Logout = ({ setSingles }) => {
  const logout = () => {
    localStorage.clear()
    setSingles(null)
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
