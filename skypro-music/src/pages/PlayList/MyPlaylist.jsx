import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import * as G from '../../App.Styles.jsx'
import * as S from './PlayList.Styles.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { SearchBlock } from '../../components/SearchBlock/Search.jsx'
import { TrackBar } from '../../components/TrackBar/TrackBar.jsx'
import { useGetFavoritePlaylistQuery } from '../../api/playlist.js'

//import { useEffect, useState } from 'react'
//import { useUserContext } from '../../context/UserContext.jsx'
import { useDispatch, useSelector } from 'react-redux'
// import Skeleton from 'react-loading-skeleton'

import {
  // allTracksSelector,
  // setSelectedSong,
  // setIsPlaying,
  setFullToken,
  setIsLikedIds,
  // setSelectedSong,
} from '../../store/Selectors/Selectors'
import { refreshToken } from '../../Api.jsx'
import { useEffect } from 'react'
//import Track from '../../components/Track/Track.jsx'
//import { useNavigate } from 'react-router-dom'
import Track from '../../components/Track/Track.jsx'
import { setFavoriteTracks } from '../../store/Slice/SliceTracks.js'

export const MyPlaylist = () => {
  //  const navigate = useNavigate()
  const { data, isLoading } = useGetFavoritePlaylistQuery()
  // const [isLoading, setIsLoading] = useState(true)
  // const { isLoadind } = useUserContext()
  const dispatch = useDispatch()
  const allTracks = useSelector(setIsLikedIds)
  //console.log(data)

  // const test = () => {
  //   data &&
  //     data.map((qw) =>
  //       console.log(
  //         Boolean(qw.stared_user.find((user) => user.id === 3057)),
  //       ),
  //     )
  // }
  // console.log(test())
  useEffect(() => {
    console.log('Favorite Loading')
    if (data) {
      dispatch(setFavoriteTracks(data))
    }
  }, [data, dispatch])

  // console.log(allTracks)
  // const selectedSong = useSelector(setSelectedSong)
  // const isPlaying = useSelector(setIsPlaying)
  //const data = useSelector((store) => store.track.isLikedIds)
  // const setSong = (track) => {
  //   const indexOfSong = data.indexOf(track)

  //   dispatch(setSingles({ track, indexOfSong }))
  // }

  // const test = () => {
  //   data && data.map((qw) => console.log(qw.stared_user))
  // }
  // console.log(test())

  const fulltoken = useSelector(setFullToken)
  let tokenref = localStorage.getItem('token').replace(/['"«»]/g, '')
  useEffect(() => {
    try {
      fulltoken
        ? refreshToken(fulltoken.refresh)
        : `${refreshToken(tokenref)} ${console.log(tokenref)}`
    } catch (error) {
      console.warn(error.message)
    }
  }, [fulltoken, tokenref])

  // console.log(data)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)
  // }, [])
  return (
    <G.Wrapper>
      <G.Container>
        <G.GlobalStyled />
        <G.Main>
          <Navigation />
          <S.FixateTracksBlock>
            <SearchBlock />
            <S.CenterblockSubHead>Мои треки</S.CenterblockSubHead>
            <TrackBar />
            {allTracks.length > 0 ? (
              <S.ContentPlaylist>
                {isLoading ? (
                  'Не удалось загрузить плейлист, попробуйте позже'
                ) : (
                  <>
                    {allTracks &&
                      allTracks.map((track) => (
                        <S.PlaylistItem key={track.id}>
                          <Track
                            key={track.id}
                            fulltoken={fulltoken}
                            track={track}
                            isLoading={isLoading}
                            dataFavorite={data}
                            dispatch={dispatch}
                            setFavoriteTracks={setFavoriteTracks}
                          />
                        </S.PlaylistItem>
                      ))}
                  </>
                )}
              </S.ContentPlaylist>
            ) : (
              <h1>Любимые треки не выбраны.</h1>
            )}
          </S.FixateTracksBlock>
          <S.FixateLogout>
            <Logout />
          </S.FixateLogout>
        </G.Main>
        <Bar />
      </G.Container>
    </G.Wrapper>
  )
}
