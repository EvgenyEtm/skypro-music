import { useState } from 'react'
import Logo from '../../img/logo.png'
import * as S from './Navigation.Styles'

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
              <S.MenuLink href="http://">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="http://">Войти</S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}

export default Menu
