import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import * as S from '../../App.Styles.jsx'
import * as D from './PlayList.Styles.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { SearchBlock } from '../../components/SearchBlock/Search.jsx'
import { TrackBar } from '../../components/TrackBar/TrackBar.jsx'
import Track from '../../components/Track/Track.jsx'

export const MyPlaylist = ({
  singles,
  arrayTrack,
  setArrayTrack,
  isLoadind,
  setSingles,
  setIsLoadind,
}) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation setSingles={setSingles} setIsLoadind={setIsLoadind} />
          <D.FixateTracksBlock>
            <SearchBlock />
            <D.CenterblockSubHead>Мои треки</D.CenterblockSubHead>
            <TrackBar />
            <Track
              arrayTrack={arrayTrack}
              setArrayTrack={setArrayTrack}
              isLoadind={isLoadind}
              setSingles={setSingles}
            />
          </D.FixateTracksBlock>
          <D.FixateLogout>
            <Logout setIsLoadind={setIsLoadind} setSingles={setSingles} />
          </D.FixateLogout>
        </S.Main>
        <Bar singles={singles} />
      </S.Container>
    </S.Wrapper>
  )
}
