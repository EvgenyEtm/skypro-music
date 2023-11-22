import LoginImg from '../../img/logo_modal.png'
import * as S from './Registration.Styles'
import { Link } from 'react-router-dom'

export function Registr() {
  return (
    <S.Wrapper>
      <S.ContainerSingup>
        <S.ModlaBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <img src={LoginImg} alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              className="login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <Link to="/">
              <S.ModalBtnSingupEnt>
                <p>Зарегистрироваться</p>
              </S.ModalBtnSingupEnt>
            </Link>
          </S.ModalFormLogin>
        </S.ModlaBlock>
      </S.ContainerSingup>
    </S.Wrapper>
  )
}

export default Registr
