import * as S from './App.Styles.jsx'
import { AppRoutes } from './routes.jsx'

import { LocalContext } from './context/UserContext.jsx'

function App() {
  //смена формы после успешной регистрации.

  return (
    <S.Container>
      <S.GlobalStyled />
      <LocalContext>
        <AppRoutes />
      </LocalContext>
    </S.Container>
  )
}

export default App
