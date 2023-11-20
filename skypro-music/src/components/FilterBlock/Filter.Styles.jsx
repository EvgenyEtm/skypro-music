import styled from 'styled-components'

export const FilterButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  background: #181818;
  color: #ffffff;
  &:hover {
    color: #9a48f1;
    border: 1px solid #9a48f1;
  }
`
export const FilterContent = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-direction: column;
  list-style-type: none;
`

export const FilterText = styled.li`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  &:hover {
    text-decoration-line: underline;
    color: #b672ff;
  }
`
export const FilterBlock = styled.div`
  position: absolute;
  font-family: StratosSkyeng;
  padding: 34px;
  border-radius: 12px;
  background: #313131;
  gap: 10px;
  display: flex;
  flex-direction: column;
  top: auto;
  max-width: 220px;
  overflow: auto;
  height: 237px;
`
