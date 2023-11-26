import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import Track from '../../components/Track/Track.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'

export const MainPage = ({ singles, setSingles, arrayTrack }) => {
  console.log(singles)

  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation setSingles={setSingles} />
          <S.MainCenterblock>
            <TrackList />
            <Track setSingles={setSingles} arrayTrack={arrayTrack} />
          </S.MainCenterblock>
          <S.MainCenterblock>
            <Logout setSingles={setSingles} />
            <Sidebar />
          </S.MainCenterblock>
        </S.Main>
        <Bar singles={singles} />
      </S.Container>
    </S.Wrapper>
  )
}
