import styled from 'styled-components'
import { ReactComponent as WatchIcon } from '../../img/icon/watch.svg'

export const CenterblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const ContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const ContentTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  width: 447px;
`
export const ContentTitleCol2 = styled(ContentTitleCol)`
  width: 321px;
`
export const ContentTitleCol3 = styled(ContentTitleCol)`
  width: 245px;
`
export const ContentTitleCol4 = styled(ContentTitleCol)`
  width: 60px;
  text-align: end;
`
export const WatchSvg = styled(WatchIcon)`
  path {
    stroke: #696969;
  }
`
