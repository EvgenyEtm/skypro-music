import { Link, useNavigate } from 'react-router-dom'
import * as S from './AuthPage.Styles'
import { useEffect, useState } from 'react'
import LoginImg from '../../img/logo_modal.png'
import { login, signupUser } from '../../Api'
import { useUserContext } from '../../context/UserContext'

export default function AuthPage() {
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [disabledButton, setDisabledButton] = useState(false)
  const navigate = useNavigate()
  const { isLoginMode, setIsLoginMode } = useUserContext()
  const handleLogin = async () => {
    try {
      console.log('2')
      if (!email) {
        console.error('не введен email')
        return
      }
      if (!password) {
        console.error('не введен password')
        return
      }
      if (email && password) {
        const response = await login(email, password)
        // console.log(response.username)
        localStorage.setItem('token', JSON.stringify(response))
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token.username)
        navigate('/')
      }
    } catch (error) {
      console.warn(error.message)
    }
    // alert(`Выполняется вход: ${email} ${password}`)
    // setError('Неизвестная ошибка входа')
  }

  const handleRegister = async () => {
    try {
      if (password === repeatPassword) {
        setDisabledButton(true)
        console.log('correc password')
        const response = await signupUser(email, password)
        console.log(response)
        localStorage.setItem('token', JSON.stringify(response))
        setIsLoginMode(true)
      } else console.log('uncorrec password')
    } catch (error) {
      console.warn(error.message)
    } finally {
      setDisabledButton(false)
    }

    // alert(`Выполняется регистрация: ${email} ${password}`)
    // setError('Неизвестная ошибка регистрации')
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <S.ModalLogo>
          <S.ModalLogoImage
            src={LoginImg}
            alt="logo"
            onClick={() => setIsLoginMode(true)}
          />
        </S.ModalLogo>
        {isLoginMode ? (
          <>
            <S.Inputs>
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
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <Link to={'/'}>
                <S.PrimaryButton
                  onClick={() => handleLogin({ email, password })}
                >
                  Войти
                </S.PrimaryButton>
              </Link>
              <S.SecondaryButton onClick={() => setIsLoginMode(false)}>
                Зарегистрироваться
              </S.SecondaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
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
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton
                disabled={disabledButton}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
