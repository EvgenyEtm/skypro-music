import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import Sidebar from '../../components/Sidbar/Sidebar.jsx'
import TrackList from '../../components/TrackList/TrackList.jsx'
import * as S from '../../App.Styles.jsx'
import Track from '../../components/Track/Track.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { useGetMainPlaylistQuery } from '../../api/playlist.js'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTracks } from '../../store/Slice/SliceTracks'
import {
  allTracksSelector,
  setFullToken,
} from '../../store/Selectors/Selectors'
import { refreshToken } from '../../Api.jsx'

export const MainPage = () => {
  //id 3057
  const { data, error, isLoading } = useGetMainPlaylistQuery()
  isLoading ?? console.log(data)
  const dispatch = useDispatch()
  const allTracks = useSelector(allTracksSelector)
  //console.log(allTracks)

  useEffect(() => {
    //console.log('Track Loading')
    if (data) {
      dispatch(getAllTracks(data))
    }
  }, [data, dispatch])

  const fulltoken = useSelector(setFullToken)
  let tokenref = localStorage.getItem('token').replace(/['"«»]/g, '')
  // fulltoken
  //   ? refreshToken(fulltoken.access)
  //   :

  // const test = () => {
  //   data && data.map((qw) => console.log(qw))
  // }
  // console.log(test())

  useEffect(() => {
    try {
      fulltoken
        ? refreshToken(fulltoken.refresh)
        : `${refreshToken(tokenref)} ${console.log(tokenref)}`
    } catch (error) {
      console.warn(error.message)
    }
  }, [fulltoken, tokenref])

  return (
    <S.Wrapper>
      <S.Container>
        <S.GlobalStyled />
        <S.Main>
          <Navigation />
          <S.MainCenterblock>
            <TrackList error={error} />
            <S.ContentPlaylist>
              {allTracks &&
                allTracks.map((track) => (
                  <S.PlaylistItem key={track.id}>
                    <Track
                      key={track.id}
                      fulltoken={fulltoken}
                      track={track}
                      isLoading={isLoading}
                      dispatch={dispatch}
                      isFavorites
                    />
                  </S.PlaylistItem>
                ))}
            </S.ContentPlaylist>
            {/* <Track trackData={data} isLoading={isLoading} /> */}
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
