import { useState } from 'react'
import Logo from '../../img/logo.png'
import * as S from './Navigation.Styles'
import { Link } from 'react-router-dom'

function Menu() {
  const [isOpened, setIsOpened] = useState(false)

  function onBurgerClick() {
    setIsOpened(!isOpened)
  }

  const logout = () => {
    localStorage.clear()
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src={Logo} alt="Logo" />
      </S.NavLogo>
      <S.NavBurger onClick={onBurgerClick}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {isOpened && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/favorites">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink onClick={logout}>Выйти</S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Menu
