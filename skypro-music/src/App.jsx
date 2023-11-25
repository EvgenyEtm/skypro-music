// import { useState } from 'react'
import * as S from './App.Styles.jsx'
import { AppRoutes } from './routes.jsx'

function App() {
  // const [user, setUser] = useState(false)
  // function userLogin() {
  //   localStorage.setItem('token', true)
  //   const token = localStorage.getItem('token')
  //   setUser(token)
  // }

  return (
    <S.Container>
      <S.GlobalStyled />
      <AppRoutes />
    </S.Container>
  )
}

export default App
console.log(localStorage)
