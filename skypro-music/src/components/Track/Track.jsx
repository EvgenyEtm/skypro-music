import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'
// import { timer } from '../Bar/Bar'
import { useUserContext } from '../../context/UserContext'
import {
  setSingles,
  //setFavoriteTracks,
  getAllTracks,
} from '../../store/Slice/SliceTracks'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedSong,
  setIsPlaying,
  //accessSelector,
  // setIsLiked,
  allTracksSelector,
} from '../../store/Selectors/Selectors'
import { useSetLikeMutation, useSetDislikeMutation } from '../../api/playlist'
//import { refreshToken } from '../../Api'

export const Track = ({ trackData }) => {
  const selectedSong = useSelector(setSelectedSong)
  // const isLiked = useSelector(setIsLiked)
  const isPlaying = useSelector(setIsPlaying)
  //const [isLoading, setIsLoading] = useState(true)
  const { isLoadind } = useUserContext()
  const dispatch = useDispatch()
  const allTracks = useSelector(allTracksSelector)

  const [like, { data, error, isLoading }] = useSetLikeMutation({
    // track,
    // token,
  })
  const [setDislike] = useSetDislikeMutation()
  //const refToken = localStorage.getItem('token').replace(/['"«»]/g, '')
  const token = localStorage.getItem('accessToken').replace(/['"«»]/g, '')
  const trackLiked = async (track) => {
    console.log(token)
    like({
      track,
      token,
    })
    // setLike(track, token)
    // await refreshToken(refToken)
  }

  const trackDisiked = async (track) => {
    setDislike(track)
    //  await refreshToken(refToken)
  }

  // useEffect(() => {
  //   refreshToken(refToken)
  // }, [refToken, setLike])
  // //console.log(accessToken)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, timer)
  // }, [])

  useEffect(() => {
    //console.log('Track Loading')
    if (trackData) {
      dispatch(getAllTracks(trackData))
    }
  }, [trackData, dispatch])

  const setSong = (track) => {
    const indexOfSong = allTracks.indexOf(track)

    dispatch(setSingles({ track, indexOfSong }))
  }

  return (
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
                      <S.TrackTitleLink onClick={() => setSong(track)}>
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
                      {/* TrackLikeSvgActive */}
                      {track.stared_user.find((user) => user.id === 3057) ? (
                        <S.TrackLikeSvgActive
                          alt="dislike"
                          onClick={() => trackDisiked(track)}
                        />
                      ) : (
                        <S.TrackLikeSvg
                          alt="like"
                          onClick={() => trackLiked(track)}
                        />
                      )}

                      <S.TrackTimeText>
                        {Math.floor(track.duration_in_seconds / 60) < 10
                          ? `0${Math.floor(track.duration_in_seconds / 60)}`
                          : Math.floor(track.duration_in_seconds / 60)}{' '}
                        {Math.floor(track.duration_in_seconds % 60) < 9
                          ? `0${Math.floor(track.duration_in_seconds % 60)}`
                          : Math.floor(track.duration_in_seconds % 60)}
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
  )
}

export default Track
