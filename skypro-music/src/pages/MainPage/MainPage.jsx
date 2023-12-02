import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import Track from '../../components/Track/Track.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'

export const MainPage = ({
  setIsLoadind,
  singles,
  setSingles,
  arrayTrack,
  isLoadind,
}) => {
  console.log(singles)

  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation setSingles={setSingles} setIsLoadind={setIsLoadind} />
          <S.MainCenterblock>
            <TrackList />
            <Track
              setSingles={setSingles}
              arrayTrack={arrayTrack}
              isLoadind={isLoadind}
            />
          </S.MainCenterblock>
          <S.MainCenterblock>
            <Logout setSingles={setSingles} setIsLoadind={setIsLoadind} />
            <Sidebar />
          </S.MainCenterblock>
        </S.Main>
        <Bar singles={singles} />
      </S.Container>
    </S.Wrapper>
  )
}
