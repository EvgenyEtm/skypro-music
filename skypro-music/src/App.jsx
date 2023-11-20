import Bar from './components/Bar/Bar'
import Navigation from './components/Navigation/Navigation.jsx'
import Sidebar from './components/Sidbar/Sidebar.jsx'
import TrackList from './components/TrackList/TrackList.jsx'
import * as S from './App.Styles.jsx'

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation />
          <TrackList />
          <Sidebar />
        </S.Main>
        <Bar />
        <footer className="footer"></footer>
      </S.Container>
    </S.Wrapper>
  )
}

export default App
