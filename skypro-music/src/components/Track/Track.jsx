import { useEffect, useState } from 'react'
//import SpriteSvg from '../../img/icon/sprite.svg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'
import { timer } from '../Bar/Bar'
import { TrackMassive } from '../Trackmassive/trackMassive'

export const Track = ({ tracks }) => {
  const [isLoading, setIsLoading] = useState(true)
  tracks = TrackMassive
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  return (
    <S.ContentPlaylist>
      {tracks.map((track) => (
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImage>
                {isLoading ? (
                  <Skeleton
                    width={55}
                    height={55}
                    baseColor="#202020"
                    highlightColor="#444"
                  />
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
                  <S.TrackTitleLink href="http://">
                    {track.trackTitleLink.title}{' '}
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
                <S.TrackAuthorLink href="http://">
                  {track.trackAuthorLink}
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
                <S.TrackAlbumLink href="http://">
                  {track.trackAlbumLink}
                </S.TrackAlbumLink>
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
                  <S.TrackTimeText>{track.trackTimeText}</S.TrackTimeText>
                </>
              )}
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </S.ContentPlaylist>
  )
}

export default Track
