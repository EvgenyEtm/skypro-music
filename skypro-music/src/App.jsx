// import Bar from './components/Bar/Bar'
// import Navigation from './components/Navigation/Navigation.jsx'
// import Sidebar from './components/Sidbar/Sidebar.jsx'
// import TrackList from './components/TrackList/TrackList.jsx'
import * as S from './App.Styles.jsx'
import { AppRoutes } from './routes.jsx'
// import { useState } from 'react'

function App() {
  const user = true
  return (
    <S.Container>
      <S.GlobalStyled />
      <AppRoutes user={user} />
    </S.Container>
  )
}

export default App

// function App() {
//   return (
//     <S.Wrapper>
//       <S.Container>
//         <S.GlobalStyled />
//         <S.Main>
//           <Navigation />
//           <TrackList />
//           <Sidebar />
//         </S.Main>
//         <Bar />
//         <AppRoutes />
//         <footer className="footer"></footer>
//       </S.Container>
//     </S.Wrapper>
//   )
// }
