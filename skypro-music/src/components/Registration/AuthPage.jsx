import { useNavigate } from 'react-router-dom'
import * as S from './AuthPage.Styles'
import { useEffect, useState } from 'react'
import LoginImg from '../../img/logo_modal.png'
import { getToken, login, signupUser } from '../../Api'
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
    if (email && password) {
      try {
        setDisabledButton(true)
        await login(email, password)

        const token = await getToken(email, password)
        //console.log(token)

        const refToken = token.refresh
        const accToken = token.access
        localStorage.setItem('fulltoken', JSON.stringify(token))
        localStorage.setItem('token', JSON.stringify(refToken))
        localStorage.setItem('accessToken', JSON.stringify(accToken))
        console.log(accToken)
        navigate('/')
      } catch (error) {
        console.warn(error.message)
        setError(error.message)
      } finally {
        console.log(error)
        setDisabledButton(false)
      }
    }
    if (!email) {
      return setError('Не указан email')
    }
    if (!password) {
      return setError('Не указан password')
    }
    // alert(`Выполняется вход: ${email} ${password}`)
  }

  //

  const handleRegister = async () => {
    if (email && password) {
      try {
        if (password === repeatPassword) {
          setDisabledButton(true)
          console.log('correc password')
          const response = await signupUser(email, password)
          console.log(response)
          localStorage.setItem('token', JSON.stringify(response))

          setIsLoginMode(true)
          navigate('/')
        }
      } catch (error) {
        console.warn(error.message)
        setError(error.message)
      } finally {
        setDisabledButton(false)
      }
    }
    if (!email) {
      return setError('Не указан email')
    }
    if (!password) {
      return setError('Не указан password')
    }
    if (!repeatPassword) {
      return setError('Повторите password')
    }
    if (password !== repeatPassword) {
      return setError('Пароли не совпадают')
    }
    // alert(`Выполняется регистрация: ${email} ${password}`)
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
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
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
