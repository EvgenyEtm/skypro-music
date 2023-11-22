import Track from '../Track/Track.jsx'
import Filter, { perfomer, year, genre } from '../FilterBlock/FIlter.jsx'
import { useState } from 'react'
import * as S from './TrackListStyles'

import { SearchBlock } from '../SearchBlock/Search.jsx'
import { TrackBar } from '../TrackBar/TrackBar.jsx'

function TrackList() {
  const [activeFilter, setActiveFilter] = useState(null)

  function changeActiveFilter(newFilter) {
    setActiveFilter(activeFilter === newFilter ? null : newFilter)
  }
  return (
    <S.MainCenterblock>
      <SearchBlock />
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
      <TrackBar />
      <Track />
    </S.MainCenterblock>
  )
}

export default TrackList
