import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import Track from '../../components/Track/Track.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'

export const MainPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation />
          <S.MainCenterblock>
            <TrackList />
            <Track />
          </S.MainCenterblock>
          <S.MainCenterblock>
            <Logout />
            <Sidebar />
          </S.MainCenterblock>
        </S.Main>
        {/* <Bar /> */}
        <Bar />
      </S.Container>
    </S.Wrapper>
  )
}
