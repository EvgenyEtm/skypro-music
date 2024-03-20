import styled from 'styled-components'
import { ReactComponent as LogoutSvg } from '../../img/icon/logout.svg'

export const SidebarPersonal = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 0 15px 0;
`
export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`
export const SidebarIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #313131;
  border-radius: 50%;
  cursor: pointer;
  padding-left: 11px;
  padding-top: 11px;
`
export const SidebarSvg = styled(LogoutSvg)``
