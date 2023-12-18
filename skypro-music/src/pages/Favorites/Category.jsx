import { useParams } from 'react-router-dom'
import { HundredHits } from './HundredHits'
import { IndiCharge } from './IndiCharge'
import { PlaylistOfTheDay } from './PlayListOfTheDay'
import Track from '../../components/Track/Track'
import * as S from '../../App.Styles'
import TrackList from '../../components/TrackList/TrackList'
import { Bar } from '../../components/Bar/Bar.Styles'

export function FavoriteCategory() {
  const { id } = useParams()

  return (
    <>
      {id === '1' ? (
        <>
          <S.Wrapper>
            <S.Container>
              <S.GlobalStyled />
              <S.MainCenterblock>
                <TrackList />
                <Track />
              </S.MainCenterblock>
              <Bar />
              <HundredHits />
            </S.Container>
          </S.Wrapper>
        </>
      ) : id === '2' ? (
        <S.Wrapper>
          <S.Container>
            <S.GlobalStyled />
            <IndiCharge />
          </S.Container>
        </S.Wrapper>
      ) : id === '3' ? (
        <S.Wrapper>
          <S.Container>
            <S.GlobalStyled />
            <PlaylistOfTheDay />
          </S.Container>
        </S.Wrapper>
      ) : (
        ''
      )}
    </>
  )
}

export default FavoriteCategory
