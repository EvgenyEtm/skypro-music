import { useState, useEffect } from 'react'
import * as S from './Bar.Styles'

export const VolumeControl = ({ audioRef }) => {
  const [volume, setVolume] = useState(20)

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])
  return (
    <>
      <S.BarVolumeBlock>
        <S.VolumeContent>
          <S.VolumeImage>
            <S.VolumeSvg alt="volume" />
          </S.VolumeImage>
          <S.VolumeProgress>
            <S.VolumeProgressLine
              className=" _btn"
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </S.VolumeProgress>
        </S.VolumeContent>
      </S.BarVolumeBlock>
    </>
  )
}
