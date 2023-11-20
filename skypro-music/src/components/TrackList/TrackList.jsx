import Track from '../Track/Track.jsx'
import Filter, { perfomer, year, genre } from '../FilterBlock/FIlter.jsx'
import { useState } from 'react'
import * as S from './TrackListStyles'

function TrackList() {
  const [activeFilter, setActiveFilter] = useState(null)

  function changeActiveFilter(newFilter) {
    setActiveFilter(activeFilter === newFilter ? null : newFilter)
  }
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg />
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockSubHead>Треки</S.CenterblockSubHead>
      <S.CenterblockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <Filter
          filterName={'исполнителю'}
          isOpened={activeFilter === 'perfomer'}
          filterList={perfomer}
          action={() => changeActiveFilter('perfomer')}
        />
        <Filter
          filterName={'году выпуска'}
          isOpened={activeFilter === 'year'}
          filterList={year}
          action={() => changeActiveFilter('year')}
        />
        <Filter
          filterName={'жанру'}
          isOpened={activeFilter === 'genre'}
          filterList={genre}
          action={() => changeActiveFilter('genre')}
        />
      </S.CenterblockFilter>
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
      <Track />
    </S.MainCenterblock>
  )
}

export default TrackList
