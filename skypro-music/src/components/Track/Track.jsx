import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'
import { timer } from '../Bar/Bar'
import { useUserContext } from '../../context/UserContext'
import { setSingles } from '../../store/Slice/SliceTracks'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedSong, setIsPlaying } from '../../store/Selectors/Selectors'

export const Track = () => {
  const selectedSong = useSelector(setSelectedSong)
  const isPlaying = useSelector(setIsPlaying)
  const [isLoading, setIsLoading] = useState(true)
  const { isLoadind, arrayTrack } = useUserContext()
  const dispatch = useDispatch()
  if (selectedSong) {
    console.log(selectedSong.id)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  const setSong = (track) => {
    const indexOfSong = arrayTrack.indexOf(track)

    dispatch(setSingles({ track, indexOfSong }))
  }

  return (
    <S.ContentPlaylist>
      {isLoadind ? (
        'Не удалось загрузить плейлист, попробуйте позже'
      ) : (
        <>
          {' '}
          {arrayTrack.map((track) => (
            <S.PlaylistItem key={track.id} onClick={() => setSong(track)}>
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
                      <S.TrackTitleLink>
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
                    <S.TrackAuthorLink>{track.author}</S.TrackAuthorLink>
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
                <S.TrackTime>
                  {isLoading ? (
                    <Skeleton
                      width={40}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <>
                      <S.TrackTimeSvg alt="time" />
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
