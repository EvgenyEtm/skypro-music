import * as S from './Filter.Styles'

export const perfomer = [
  {
    id: 0,
    name: 'Neil Armstrong',
  },
  {
    id: 1,
    name: 'Alan Bean',
  },
  {
    id: 2,
    name: 'Peter Conrad',
  },
  {
    id: 3,
    name: 'Edgar Mitchell',
  },
  {
    id: 4,
    name: 'Alan Shepard',
  },
]

export const year = [
  {
    id: 0,
    name: 1992,
  },
  {
    id: 1,
    name: 1993,
  },
  {
    id: 2,
    name: 1994,
  },
]

export const genre = [
  {
    id: 0,
    name: 'поп-музыка',
  },
  {
    id: 1,
    name: 'хип-хоп',
  },
  {
    id: 2,
    name: 'рок',
  },
  {
    id: 3,
    name: 'джаз',
  },
  {
    id: 4,
    name: 'классика',
  },
]

function Filter({ filterName, isOpened, filterList, action }) {
  return (
    <div onClick={action}>
      <S.FilterButton>{filterName}</S.FilterButton>
      {isOpened && (
        <S.FilterBlock>
          <S.FilterContent>
            {filterList.map((item) => {
              return (
                <S.FilterText key={item.id}>
                  <>{item.name}</>
                </S.FilterText>
              )
            })}
          </S.FilterContent>
        </S.FilterBlock>
      )}
    </div>
  )
}

export default Filter