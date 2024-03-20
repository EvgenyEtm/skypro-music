import * as S from './TrackBar.Styled'
export const TrackBar = () => {
  return (
    <S.CenterblockContent>
      <S.ContentTitle>
        <S.ContentTitleCol>Трек</S.ContentTitleCol>
        <S.ContentTitleCol2>ИСПОЛНИТЕЛЬ</S.ContentTitleCol2>
        <S.ContentTitleCol3>АЛЬБОМ</S.ContentTitleCol3>
        <S.ContentTitleCol4>
          <S.WatchSvg />
        </S.ContentTitleCol4>
      </S.ContentTitle>
    </S.CenterblockContent>
  )
}
