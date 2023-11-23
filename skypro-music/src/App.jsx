import * as S from './App.Styles.jsx'
import { AppRoutes } from './routes.jsx'

function App() {
  localStorage.setItem('token', true)
  let user = localStorage.getItem('token')
  console.log(localStorage)
  return (
    <S.Container>
      <S.GlobalStyled />
      <AppRoutes user={user} />
    </S.Container>
  )
}

export default App
