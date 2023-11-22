import * as S from './Login.Styles'
import { Link } from 'react-router-dom'
import LoginImg from '../../img/logo_modal.png'
export const Login = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src={LoginImg} alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <Link to={'/mainpage'}>
              <S.ModalBtnEnter>
                <p>Войти</p>
              </S.ModalBtnEnter>
            </Link>
            <Link to="/registration">
              <S.ModalBtnSignUp>
                <p>Зарегистрироваться</p>
              </S.ModalBtnSignUp>
            </Link>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
