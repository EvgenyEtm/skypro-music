import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import Track from '../../components/Track/Track.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { useGetMainPlaylistQuery } from '../../api/playlist.js'

export const MainPage = () => {
  //id 3057
  const { data, error, isLoading } = useGetMainPlaylistQuery()
  isLoading ?? console.log(data)
  // const test = () => {
  //   data &&
  //     data.map((qw) =>
  //       console.log(
  //         Boolean(qw.stared_user.find((user) => user.id === 3057)),
  //       ),
  //     )
  // }
  // console.log(test())
  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation />
          <S.MainCenterblock>
            <TrackList error={error} isLoading={isLoading} />
            <Track trackData={data} />
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
