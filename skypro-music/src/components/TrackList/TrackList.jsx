import Track from '../Track/Track.jsx'
import SpriteSvg from '../../img/icon/sprite.svg'
import Filter, { perfomer, year, genre } from '../FilterBlock/FIlter.jsx'
import { useState } from 'react'
import * as S from './TrackListStyles'

function TrackList() {
  const [activeFilter, setActiveFilter] = useState(null)

  function changeActiveFilter(newFilter) {
    setActiveFilter(activeFilter === newFilter ? null : newFilter)
  }
  return (
    <S.MainCenterblock className="centerblock">
      <S.CenterblockSearch className="search">
        <S.SearchSvg>
          <use xlinkHref={`${SpriteSvg}#icon-search`}></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <S.CenterblockFilter className="filter">
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
        <S.ContentTitle className="playlist-title">
          <S.ContentTitleCol className="col01">Трек</S.ContentTitleCol>
          <S.ContentTitleCol2 className="col02">ИСПОЛНИТЕЛЬ</S.ContentTitleCol2>
          <S.ContentTitleCol className="col03">АЛЬБОМ</S.ContentTitleCol>
          <S.ContentTitleCol className="col04">
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref={`${SpriteSvg}#icon-watch`}></use>
            </S.PlaylistTitleSvg>
          </S.ContentTitleCol>
        </S.ContentTitle>
      </S.CenterblockContent>
      <Track />
    </S.MainCenterblock>
  )
}

export default TrackList
