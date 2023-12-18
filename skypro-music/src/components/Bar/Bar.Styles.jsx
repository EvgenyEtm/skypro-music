import styled from 'styled-components'
import { ReactComponent as PrevSvg } from '../../img/icon/prev.svg'
import { ReactComponent as PlaySvg } from '../../img/icon/play.svg'
import { ReactComponent as NextSvg } from '../../img/icon/next.svg'
import { ReactComponent as RepeatSvg } from '../../img/icon/repeat.svg'
import { ReactComponent as ShuffleSvg } from '../../img/icon/shuffle.svg'
import { ReactComponent as NoteSvg } from '../../img/icon/note.svg'
import { ReactComponent as LikeSvg } from '../../img/icon/like.svg'
import { ReactComponent as DislikeSvg } from '../../img/icon/dislike.svg'
import { ReactComponent as VolumeSvgIcon } from '../../img/icon/volume.svg'
import { ReactComponent as PauseSvg } from '../../img/icon/pause.svg'

//  {
//   <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
//   <rect width="5" height="19" fill="#D9D9D9"/>
//   <rect x="10" width="5" height="19" fill="#D9D9D9"/>
// </svg>
//  }

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`
export const BarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const BarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`
export const BarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`
export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`
export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
`
export const PlayerBtnPrevSvg = styled(PrevSvg)`
  width: 15px;
  height: 14px;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active path {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
  cursor: pointer;
`
export const PlayerBtnPlaySvg = styled(PlaySvg)`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active path {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const PlayerBtnPauseSvg = styled(PauseSvg)`
  width: 22px;
  height: 20px;
  cursor: pointer;
  fill: #d9d9d9;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    ${'' /* cursor: pointer; */}
  }
  &:active {
    fill: transparent;
    stroke: #ffffff;
    ${'' /* cursor: pointer; */}
  }
`

export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`
export const PlayerBtnNextSvg = styled(NextSvg)`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active path {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`

export const PlayerBntRepeatSvgActive = styled(RepeatSvg)`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #ffffff;
  cursor: pointer;
`

export const PlayerBtnRepeatSvg = styled(RepeatSvg)`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active path {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const PlayerBtnShuffleSvg = styled(ShuffleSvg)`
  cursor: pointer;
  path {
    fill: #696969;
  }
  &:hover path {
    fill: #acacac;
  }
  &:active {
    fill: white;
  }
`
export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const TrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`
export const TrackPlaySvg = styled(NoteSvg)`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
  &:hover path {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active path {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
`
export const TrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`
export const TrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`
export const TrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`
export const TrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`
export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`
export const TrackPlayLike = styled.div`
  padding: 5px;
`
export const TrackPlayLikeSvg = styled(LikeSvg)`
  cursor: pointer;
  path {
    stroke: #696969;
  }
  &:hover path {
    stroke: #acacac;
  }

  &:active path {
    stroke-width: 1px;
    stroke: #b672ff;
    fill: #b672ff;
  }
`
export const TrackPlayDislike = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`
export const TrackPlayDislikeSvg = styled(DislikeSvg)`
  cursor: pointer;
  path {
    stroke: #696969;
  }
  &:hover path {
    stroke: #acacac;
  }
  &:active path {
    fill: #696969;
    stroke: white;
  }
`
export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`
export const VolumeSvg = styled(VolumeSvgIcon)`
  cursor: pointer;
  path {
    stroke: #797979;
    stroke-width: 2;
  }
`
export const MuteSvg = styled.img`
  cursor: pointer;
  ${
    '' /* path {
    stroke: #797979;
    stroke-width: 2;
  } */
  }
`

export const VolumeProgress = styled.div`
  width: 109px;
`
export const VolumeProgressLine = styled.input`
  cursor: pointer;
  width: 109px;
`
