import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'

export const MainPage = () => {
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
      </S.Container>
    </S.Wrapper>
  )
}
