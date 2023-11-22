import { useState } from 'react'
import Logo from '../../img/logo.png'
import * as S from './Navigation.Styles'
import { Link } from 'react-router-dom'

function Menu() {
  const [isOpened, setIsOpened] = useState(false)

  function onBurgerClick() {
    setIsOpened(!isOpened)
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
              <Link to="/mainpage">
                <S.MenuLink>Главное</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/myplaylist">
                <S.MenuLink>Мой плейлист</S.MenuLink>
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>Выйти</S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Menu
