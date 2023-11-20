import { useEffect, useState } from 'react'
import * as S from './Sidebar.Styles'
import 'react-loading-skeleton/dist/skeleton.css'
//import SpriteSvg from '../../img/icon/sprite.svg'
import img1 from '../../img/playlist01.png'
import img2 from '../../img/playlist02.png'
import img3 from '../../img/playlist03.png'
import Skeleton from 'react-loading-skeleton'
import { timer } from '../Bar/Bar'

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timer)
  }, [])

  return (
    <S.MainSidebar className="sidebar">
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <S.SidebarSvg alt="logout" />
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={img1} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={img2} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarLink href="#">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={150}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.SidebarImg src={img3} alt="day's playlist" />
              )}
            </S.SidebarLink>
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default Sidebar
