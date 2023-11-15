import { useEffect, useState } from 'react';
import SpriteSvg from "../../img/icon/sprite.svg"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './Track.Styles';
import { timer } from '../Bar/Bar';

function Track() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  return (
    <S.ContentPlaylist className="playlist">
      <S.PlaylistItem>
        <S.PlaylistTrack className="track">
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
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref={`${SpriteSvg}#icon-note`}></use>
                </S.TrackTitleSvg>
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
                  Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton width={270} 
              baseColor="#202020" 
              highlightColor="#444" />
            ) : (
              <S.TrackAuthorLink href="http://">
                Nero
              </S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton width={250} 
              baseColor="#202020" 
              highlightColor="#444" />
            ) : (
              <S.TrackAlbumLink href="http://">
                Welcome Reality
              </S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          <S.TrackTime>
            {isLoading ? (
              <Skeleton width={40} 
              baseColor="#202020" 
              highlightColor="#444" />
            ) :
            (
              <>
              <S.TrackTimeSvg alt="time">
                <use xlinkHref={`${SpriteSvg}#icon-like`}></use>
              </S.TrackTimeSvg>
              <S.TrackTimeText>4:44</S.TrackTimeText>
              </>
            )
            }
          </S.TrackTime>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    </S.ContentPlaylist>
  )
}

export default Track
