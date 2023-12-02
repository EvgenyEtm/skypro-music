import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.Styles'
import React from 'react'
import ProgressBar from './ProgressBar'
import { VolumeControl } from './VolumeControl'
export const timer = 1000

function Bar({ singles }) {
  const [repeatTrack, setRepeatTrack] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = React.useRef(null)

  // useEffect(() => {
  //   singles ? (audioRef.current.autoplay = true) : null
  // }, [])

  const useRepeat = () => {
    console.log(repeatTrack)
    if (repeatTrack === true) {
      return setRepeatTrack(false), (audioRef.current.loop = false)
    }
    if (repeatTrack === false) {
      return setRepeatTrack(true), (audioRef.current.loop = true)
    }
  }
  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  const togglePlay = isPlaying ? handleStop : handleStart

  useEffect(() => {
    if (isPlaying && singles) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying, singles, audioRef])

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }
  const onTimeUpdate = () => {
    setTimeProgress(audioRef.current.currentTime)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  return (
    <>
      {singles ? (
        <S.Bar>
          <audio
            src={singles.track_file}
            ref={audioRef}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            style={{ display: 'none' }}
          >
            {/* <source src={singles.track_file} /> */}
          </audio>
          <S.BarContent>
            <ProgressBar
              onProgress="timeProgress"
              duration={duration}
              timeProgress={timeProgress}
              audioRef={audioRef}
            />
            {/* <S.BarPlayerProgress /> */}
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg alt="prev" />
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    {isPlaying ? (
                      <S.PlayerBtnPauseSvg onClick={togglePlay} alt="pause" />
                    ) : (
                      <S.PlayerBtnPlaySvg onClick={togglePlay} alt="play" />
                    )}
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg alt="next" />
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat onClick={useRepeat}>
                    {repeatTrack ? (
                      <S.PlayerBntRepeatSvgActive alt="repeat" />
                    ) : (
                      <S.PlayerBtnRepeatSvg alt="repeat" />
                    )}
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle>
                    <S.PlayerBtnShuffleSvg alt="shuffle" />
                  </S.PlayerBtnShuffle>
                </S.PlayerControls>

                <S.PlayerTrackPlay>
                  <S.TrackPlayContain>
                    <S.TrackPlayImage>
                      {isLoading ? (
                        <Skeleton
                          width={55}
                          height={55}
                          baseColor="#202020"
                          highlightColor="#444"
                        />
                      ) : (
                        <S.TrackPlaySvg alt="music" />
                      )}
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
                          {singles.name}
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
                          {singles.author}
                        </S.TrackPlayAlbumLink>
                      )}
                    </S.TrackPlayAlbum>
                  </S.TrackPlayContain>

                  <S.TrackPlayLikeDis>
                    <S.TrackPlayLike className="_btn-icon">
                      <S.TrackPlayLikeSvg alt="like" />
                    </S.TrackPlayLike>
                    <S.TrackPlayDislike className="_btn-icon">
                      <S.TrackPlayDislikeSvg alt="dislike" />
                    </S.TrackPlayDislike>
                  </S.TrackPlayLikeDis>
                </S.PlayerTrackPlay>
              </S.BarPlayer>
              <VolumeControl audioRef={audioRef} />
            </S.BarPlayerBlock>
          </S.BarContent>
        </S.Bar>
      ) : null}
    </>
  )
}

export default Bar
