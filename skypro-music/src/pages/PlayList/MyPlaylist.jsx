import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
// import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import * as D from './PlayList.Styles.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { SearchBlock } from '../../components/SearchBlock/Search.jsx'
import { TrackBar } from '../../components/TrackBar/TrackBar.jsx'
import Track from '../../components/Track/Track.jsx'

export const MyPlaylist = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation />
          <D.FixateTracksBlock>
            <SearchBlock />
            <D.CenterblockSubHead>Мои треки</D.CenterblockSubHead>
            <TrackBar />
            <Track />
          </D.FixateTracksBlock>
          <D.FixateLogout>
            <Logout />
          </D.FixateLogout>
        </S.Main>
        <Bar />
      </S.Container>
    </S.Wrapper>
  )
}