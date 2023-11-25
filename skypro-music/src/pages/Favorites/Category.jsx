import { useParams } from 'react-router-dom'
import { HundredHits } from './HundredHits'
import { IndiCharge } from './IndiCharge'
import { PlaylistOfTheDay } from './PlayListOfTheDay'
import Track from '../../components/Track/Track'
import * as S from '../../App.Styles'

export function FavoriteCategory() {
  const { id } = useParams()
  console.log(id)
  return (
    <>
      {id === '1' ? (
        <>
          <S.Wrapper>
            <S.Container>
              <S.GlobalStyled />
              <Track />
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
