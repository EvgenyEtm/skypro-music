import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Bar.Styles'
import React from 'react'
import ProgressBar from './ProgressBar'
import { VolumeControl } from './VolumeControl'
// import { useUserContext } from '../../context/UserContext'
import { useDispatch, useSelector } from 'react-redux'
import {
  setIsPlaying,
  setNextTrack,
  setPrevTrack,
  setShuffledTracks,
  // repeatPlayer,
} from '../../store/Slice/SliceTracks'
import {
  shuffleAllTracksSelector,
  allTracksSelector,
  setSelectedSong,
} from '../../store/Selectors/Selectors'

export const timer = 1000

function Bar() {
  const [repeatTrack, setRepeatTrack] = useState(false)
  // const [isPlaying, setIsPlaying] = useState(false)
  const [timeProgress, setTimeProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = React.useRef(null)
  const dispatch = useDispatch()
  const suffle = useSelector((store) => store.track.shuffle)
  // const { selectedSong } = useUserContext()
  const selectedSong = useSelector(setSelectedSong)
  const shuffleAllTracks = useSelector(shuffleAllTracksSelector)
  const allTracks = useSelector(allTracksSelector)

  const allTracksPlayer = suffle ? shuffleAllTracks : allTracks
  const indexOfSong = useSelector((store) => store.track.indexOfSong)
  const isPlaying = useSelector((store) => store.track.isPlaying)
  const useRepeat = () => {
    console.log(repeatTrack)
    if (repeatTrack === true) {
      return setRepeatTrack(false), (audioRef.current.loop = false)
    }
    if (repeatTrack === false) {
      return setRepeatTrack(true), (audioRef.current.loop = true)
    }
  }

  const togglePlay = () => {
    {
      isPlaying
        ? `${(audioRef.current.pause(), dispatch(setIsPlaying(false)))}`
        : `${(audioRef.current.play(), dispatch(setIsPlaying(true)))}`
    }
  }

  const nextTrack = () => {
    if (indexOfSong < allTracksPlayer.length - 1) {
      dispatch(
        setNextTrack({
          nextTrack: allTracksPlayer[allTracksPlayer.indexOf(selectedSong) + 1],
          indexNextTrack: allTracksPlayer.indexOf(selectedSong) + 1,
        }),
      )
      console.log('nextTrack')
    }
    if (indexOfSong === allTracksPlayer.length - 1) {
      dispatch(
        setNextTrack({
          nextTrack: allTracksPlayer[0],
          indexNextTrack: 0,
        }),
      )
      console.log('re')
    }
  }

  const prevTrack = () => {
    if (indexOfSong < allTracksPlayer.length - 1) {
      dispatch(
        setPrevTrack({
          prevTrack: allTracksPlayer[allTracksPlayer.indexOf(selectedSong) - 1],
          indexPrevTrack: allTracksPlayer.indexOf(selectedSong) - 1,
        }),
      )
      console.log('prevTrack')
    }
  }

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

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.play()
      dispatch(setIsPlaying(true))
      audioRef.current.onended = () => {
        if (indexOfSong < allTracksPlayer.length - 1) {
          dispatch(
            setNextTrack({
              nextTrack:
                allTracksPlayer[allTracksPlayer.indexOf(selectedSong) + 1],
              indexNextTrack: allTracksPlayer.indexOf(selectedSong) + 1,
            }),
            console.log('2'),
          )
          dispatch(setIsPlaying(false))
        }
      }
    }
  }, [selectedSong])

  return (
    <>
      {selectedSong ? (
        <S.Bar>
          <audio
            src={selectedSong.track_file}
            ref={audioRef}
            onTimeUpdate={onTimeUpdate}
            onLoadedMetadata={onLoadedMetadata}
            style={{ display: 'none' }}
          ></audio>
          <S.BarContent>
            <ProgressBar
              onProgress="timeProgress"
              duration={duration}
              timeProgress={timeProgress}
              audioRef={audioRef}
            />
            <S.BarPlayerBlock>
              <S.BarPlayer>
                <S.PlayerControls>
                  <S.PlayerBtnPrev>
                    <S.PlayerBtnPrevSvg onClick={prevTrack} alt="prev" />
                  </S.PlayerBtnPrev>
                  <S.PlayerBtnPlay>
                    {isPlaying ? (
                      <S.PlayerBtnPauseSvg onClick={togglePlay} alt="pause" />
                    ) : (
                      <S.PlayerBtnPlaySvg onClick={togglePlay} alt="play" />
                    )}
                  </S.PlayerBtnPlay>
                  <S.PlayerBtnNext>
                    <S.PlayerBtnNextSvg onClick={nextTrack} alt="next" />
                  </S.PlayerBtnNext>
                  <S.PlayerBtnRepeat onClick={useRepeat}>
                    {repeatTrack ? (
                      <S.PlayerBntRepeatSvgActive alt="repeat" />
                    ) : (
                      <S.PlayerBtnRepeatSvg alt="repeat" />
                    )}
                  </S.PlayerBtnRepeat>
                  <S.PlayerBtnShuffle
                    onClick={() => {
                      dispatch(setShuffledTracks())
                    }}
                  >
                    {suffle ? (
                      <S.PlayerBtnShuffleSvgActive alt="shuffle" />
                    ) : (
                      <S.PlayerBtnShuffleSvg alt="shuffle" />
                    )}
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
                          {selectedSong.name}
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
                          {selectedSong.author}
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
