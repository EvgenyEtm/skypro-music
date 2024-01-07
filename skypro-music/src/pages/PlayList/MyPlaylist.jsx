import Bar from '../../components/Bar/Bar.jsx'
import Navigation from '../../components/Navigation/Navigation.jsx'
import * as G from '../../App.Styles.jsx'
import * as S from './PlayList.Styles.jsx'
import { Logout } from '../../components/Logout/Logout.jsx'
import { SearchBlock } from '../../components/SearchBlock/Search.jsx'
import { TrackBar } from '../../components/TrackBar/TrackBar.jsx'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../context/UserContext.jsx'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { setSingles, removeTrack } from '../../store/Slice/SliceTracks'

import {
  // allTracksSelector,
  setSelectedSong,
  setIsPlaying,
} from '../../store/Selectors/Selectors'
export const MyPlaylist = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { isLoadind } = useUserContext()
  const dispatch = useDispatch()
  const selectedSong = useSelector(setSelectedSong)
  const isPlaying = useSelector(setIsPlaying)
  const allTracks = useSelector((store) => store.track.isLikedIds)
  const setSong = (track) => {
    const indexOfSong = allTracks.indexOf(track)

    dispatch(setSingles({ track, indexOfSong }))
  }

  console.log(allTracks)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
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
            {allTracks ? (
              <S.ContentPlaylist>
                {isLoadind ? (
                  'Не удалось загрузить плейлист, попробуйте позже'
                ) : (
                  <>
                    {' '}
                    {allTracks.map((track) => (
                      <S.PlaylistItem key={track.id}>
                        <S.PlaylistTrack>
                          <S.TrackTitle>
                            <S.TrackTitleImage>
                              {selectedSong && selectedSong.id === track.id ? (
                                <S.PointPlaying $playing={isPlaying} />
                              ) : (
                                <S.TrackTitleSvg alt="music" />
                              )}
                            </S.TrackTitleImage>
                            <S.TrackTitleText>
                              {isLoading ? (
                                <Skeleton
                                  width={200}
                                  baseColor="#202020"
                                  highlightColor="#444"
                                />
                              ) : (
                                <S.TrackTitleLink
                                  onClick={() => setSong(track)}
                                >
                                  {track.name}
                                  <S.TrackTitleSpan></S.TrackTitleSpan>
                                </S.TrackTitleLink>
                              )}
                            </S.TrackTitleText>
                          </S.TrackTitle>
                          <S.TrackAuthor>
                            {isLoading ? (
                              <Skeleton
                                width={270}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                            ) : (
                              <S.TrackAuthorLink onClick={() => setSong(track)}>
                                {track.author}
                              </S.TrackAuthorLink>
                            )}
                          </S.TrackAuthor>
                          <S.TrackAlbum>
                            {isLoading ? (
                              <Skeleton
                                width={250}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                            ) : (
                              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
                            )}
                          </S.TrackAlbum>
                          {/* <FavoriteTrack
                  isLiked={isLiked}
                  setFavoriteTracks={setFavoriteTracks}
                /> */}
                          <S.TrackTime>
                            {isLoading ? (
                              <Skeleton
                                width={40}
                                baseColor="#202020"
                                highlightColor="#444"
                              />
                            ) : (
                              <>
                                <S.TrackLikeSvgActive
                                  onClick={() =>
                                    dispatch(removeTrack({ id: track.id }))
                                  }
                                />
                                {/* {isLiked.id === track.id ? (
                        <S.TrackLikeSvgActive
                          onClick={() => dispatch(setFavoriteTracks({ track }))}
                        />
                      ) : (
                        <S.TrackLikeSvg
                          alt="like"
                          onClick={() =>
                            dispatch(setFavoriteTracks({ id: track.id }))
                          }
                        />
                      )} */}

                                <S.TrackTimeText>
                                  {Math.floor(track.duration_in_seconds / 60) <
                                  10
                                    ? `0${Math.floor(
                                        track.duration_in_seconds / 60,
                                      )}`
                                    : Math.floor(
                                        track.duration_in_seconds / 60,
                                      )}{' '}
                                  {Math.floor(track.duration_in_seconds % 60) <
                                  9
                                    ? `0${Math.floor(
                                        track.duration_in_seconds % 60,
                                      )}`
                                    : Math.floor(
                                        track.duration_in_seconds % 60,
                                      )}
                                </S.TrackTimeText>
                              </>
                            )}
                          </S.TrackTime>
                        </S.PlaylistTrack>
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
