import { useEffect, useState } from 'react'
import SpriteSvg from '../../img/icon/sprite.svg'
import Skeleton from 'react-loading-skeleton'
import * as S from './BarStyles'
export const timer = 5000

function Bar() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer className="player">
            <S.PlayerControls>
              <S.PlayerBtnPrev>
                <S.PlayerBtnPrevSvg className="_btn-icon" alt="prev">
                  <use xlinkHref={`${SpriteSvg}#icon-prev`} />
                </S.PlayerBtnPrevSvg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay className="_btn">
                <S.PlayerBtnPlaySvg className="_btn-icon" alt="play">
                  <use xlinkHref={`${SpriteSvg}#icon-play`} />
                </S.PlayerBtnPlaySvg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg className="_btn-icon" alt="next">
                  <use xlinkHref={`${SpriteSvg}#icon-next`} />
                </S.PlayerBtnNextSvg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <S.PlayerBtnRepeatSvg className="_btn-icon" alt="repeat">
                  <use xlinkHref={`${SpriteSvg}#icon-repeat`} />
                </S.PlayerBtnRepeatSvg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffleSvg className="_btn-icon" alt="shuffle">
                  <use xlinkHref={`${SpriteSvg}#icon-shuffle`} />
                </S.PlayerBtnShuffleSvg>
              </S.PlayerBtnShuffle>
            </S.PlayerControls>

            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySvg alt="music">
                    <use xlinkHref={`${SpriteSvg}#icon-note`} />
                  </S.TrackPlaySvg>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  {isLoading ? (
                    <Skeleton
                      width={90}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <S.TrackPlayAuthorLink href="http://">
                      Ты та...
                    </S.TrackPlayAuthorLink>
                  )}
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  {isLoading ? (
                    <Skeleton
                      width={90}
                      baseColor="#202020"
                      highlightColor="#444"
                    />
                  ) : (
                    <S.TrackPlayAlbumLink href="http://">
                      Баста
                    </S.TrackPlayAlbumLink>
                  )}
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSvg alt="like">
                    <use xlinkHref={`${SpriteSvg}#icon-like`} />
                  </S.TrackPlayLikeSvg>
                </S.TrackPlayLike>
                <S.TrackPlayDislike className="_btn-icon">
                  <S.TrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref={`${SpriteSvg}#icon-dislike`} />
                  </S.TrackPlayDislikeSvg>
                </S.TrackPlayDislike>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSvg alt="volume">
                  <use xlinkHref={`${SpriteSvg}#icon-volume`} />
                </S.VolumeSvg>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine type="range" name="range" />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
