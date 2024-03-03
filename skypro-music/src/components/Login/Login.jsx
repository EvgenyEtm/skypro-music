/* eslint-disable no-debugger */
import * as S from './Login.Styles'
import { Link } from 'react-router-dom'
import LoginImg from '../../img/logo_modal.png'
import { useState } from 'react'
import { getToken, login } from '../../Api'

export const Login = ({ setUsername }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(false)

  const handleLogin = async () => {
    localStorage.setItem('token', true)
    const token = localStorage.getItem('token')
    setUser(token)
    console.log(user)
    console.log('1')
    try {
      console.log('2')
      if (email && password) {
        debugger
        const response = await login(email, password)

        const token = await getToken(email, password)
        // console.log(response.username)
        console.log(token)
        setUsername(response.username)
      }
      if (!email) {
        console.error('не введен email')
      }
      if (!password) {
        console.error('не введен password')
      }
    } catch (error) {
      console.warn(error.message)
    }
    // alert(`Выполняется вход: ${email} ${password}`)
    // setError('Неизвестная ошибка входа')
  }

  // function userLogin() {
  //   localStorage.setItem('token', true)
  //   const token = localStorage.getItem('token')
  //   setUser(token)
  //   console.log(user)

  // }
  // console.log(localStorage)
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
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value)
              }}
            />
            <S.Separator />
            <Link to={'/'}>
              <S.ModalBtnEnter onClick={handleLogin}>
                <p>Войти</p>
              </S.ModalBtnEnter>
            </Link>
            <Link to="/register">
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
