import * as S from '../SearchBlock/Search.Styled'

export const SearchBlock = () => {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg />
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  )
}
