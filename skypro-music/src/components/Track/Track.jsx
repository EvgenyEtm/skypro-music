import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import * as S from './Track.Styles'
// import { timer } from '../Bar/Bar'
//import { useUserContext } from '../../context/UserContext'
import {
  addTrack,
  removeTrack,
  setSingles,
  //setFavoriteTracks,
} from '../../store/Slice/SliceTracks'
import {
  //useDispatch,
  useSelector,
} from 'react-redux'
import {
  setSelectedSong,
  setIsPlaying,
  //accessSelector,
  // setIsLiked,
  allTracksSelector,
  // setIsLikedIds,
} from '../../store/Selectors/Selectors'
import { useSetLikeMutation, useSetDislikeMutation } from '../../api/playlist'
import { useUserContext } from '../../context/UserContext'
import { refreshToken } from '../../Api'
//import { useNavigate } from 'react-router-dom'
//import { setRelifeAccess } from '../../store/Slice/SliceAuth'

export const Track = ({
  isLoading,
  track,
  fulltoken,
  dataFavorite,
  dispatch,
}) => {
  const selectedSong = useSelector(setSelectedSong)
  // const isLiked = useSelector(setIsLiked)
  const isPlaying = useSelector(setIsPlaying)
  //const [isLoading, setIsLoading] = useState(false)
  const { isLoadind } = useUserContext()
  //const dispatch = useDispatch()
  const allTracks = useSelector(allTracksSelector)

  // const FavoriteTrack = useSelector(setIsLikedIds)

  const isPage = track.stared_user
    ? Boolean(track.stared_user?.find((user) => user.id === 3057))
    : null
  //console.log(isPage)
  const [isLiked, setIsLiked] = useState(null)

  //const nav = useNavigate()

  const [like] = useSetLikeMutation({ track })

  const [dislike] = useSetDislikeMutation({ track })

  const trackLiked = async (track) => {
    dispatch(addTrack({ track }))
    setIsLiked(true)
    like({
      track,
    })

    if (fulltoken) {
      await refreshToken(fulltoken.refresh)
      setIsLiked(true)
    } else {
      setIsLiked(true)
      await like({
        track,
        // token,
      })
      await refreshToken(localStorage.getItem('token').replace(/['"«»]/g, ''))
    }
    console.log(fulltoken)
  }

  const trackDisiked = async (track) => {
    //console.log(data)
    dataFavorite ? dispatch(removeTrack(track.id)) : null
    console.log(dataFavorite)
    setIsLiked(false)
    await dislike({
      track,
    })
    // ? console.log(FavoriteTrack.filter((fav) => fav.id === track.id))
    // : null
    if (fulltoken) {
      await refreshToken(fulltoken.refresh)
    } else {
      await dislike({
        track,
      })
      await refreshToken(localStorage.getItem('token').replace(/['"«»]/g, ''))
      setIsLiked(false)
    }
  }

  useEffect(() => {
    console.log('reliking')
    if (isPage === null) {
      setIsLiked(true)
    } else {
      setIsLiked(isPage)
    }
  }, [isPage, dispatch, track])
  // return localStorage.clear(), nav('/auth'), console.log(fulltoken)
  //console.log(accessToken)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000)
  // }, [])

  // useEffect(() => {
  //   //console.log('Track Loading')
  //   if (trackData) {
  //     dispatch(getAllTracks(trackData))
  //   }
  // }, [trackData, dispatch])

  const setSong = (track) => {
    const indexOfSong = allTracks.indexOf(track)

    dispatch(setSingles({ track, indexOfSong }))
  }

  return (
    <>
      {isLoadind ? (
        'Не удалось загрузить плейлист, попробуйте позже'
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              {selectedSong && selectedSong.id === track.id ? (
                <S.PointPlaying $playing={isPlaying} />
              ) : (
                <S.TrackTitleSvg alt="music" />
              )}
            </S.TrackTitleImage>
            <S.TrackTitleText>
              {isLoading ? (
                <Skeleton
                  width={200}
                  count={1}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              ) : (
                <S.TrackTitleLink onClick={() => setSong(track)}>
                  {track.name}
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              )}
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            {isLoading ? (
              <Skeleton width={270} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAuthorLink onClick={() => setSong(track)}>
                {track.author}
              </S.TrackAuthorLink>
            )}
          </S.TrackAuthor>
          <S.TrackAlbum>
            {isLoading ? (
              <Skeleton width={250} baseColor="#202020" highlightColor="#444" />
            ) : (
              <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
            )}
          </S.TrackAlbum>
          {/* <FavoriteTrack
                  
                  setFavoriteTracks={setFavoriteTracks}
                /> */}
          <S.TrackTime>
            {isLoading ? (
              <Skeleton width={40} baseColor="#202020" highlightColor="#444" />
            ) : (
              <>
                {isLiked ? (
                  <S.TrackLikeSvgActive
                    alt="dislike"
                    onClick={() => trackDisiked(track)}
                  />
                ) : (
                  <S.TrackLikeSvg
                    alt="like"
                    onClick={() => trackLiked(track)}
                  />
                )}

                <S.TrackTimeText>
                  {Math.floor(track.duration_in_seconds / 60) < 10
                    ? `0${Math.floor(track.duration_in_seconds / 60)}`
                    : Math.floor(track.duration_in_seconds / 60)}{' '}
                  {Math.floor(track.duration_in_seconds % 60) < 9
                    ? `0${Math.floor(track.duration_in_seconds % 60)}`
                    : Math.floor(track.duration_in_seconds % 60)}
                </S.TrackTimeText>
              </>
            )}
          </S.TrackTime>
        </S.PlaylistTrack>
      )}
    </>
  )
}

export default Track

// return (
//   <S.ContentPlaylist>
//     {isLoadind ? (
//       'Не удалось загрузить плейлист, попробуйте позже'
//     ) : (
//       <>
//         {' '}
//         {allTracks.map((track) => (
//           <S.PlaylistItem key={track.id}>
//             <S.PlaylistTrack>
//               <S.TrackTitle>
//                 <S.TrackTitleImage>
//                   {selectedSong && selectedSong.id === track.id ? (
//                     <S.PointPlaying $playing={isPlaying} />
//                   ) : (
//                     <S.TrackTitleSvg alt="music" />
//                   )}
//                 </S.TrackTitleImage>
//                 <S.TrackTitleText>
//                   {isLoading ? (
//                     <Skeleton
//                       width={200}
//                       count={1}
//                       baseColor="#202020"
//                       highlightColor="#444"
//                     />
//                   ) : (
//                     <S.TrackTitleLink onClick={() => setSong(track)}>
//                       {track.name}
//                       <S.TrackTitleSpan></S.TrackTitleSpan>
//                     </S.TrackTitleLink>
//                   )}
//                 </S.TrackTitleText>
//               </S.TrackTitle>
//               <S.TrackAuthor>
//                 {isLoading ? (
//                   <Skeleton
//                     width={270}
//                     baseColor="#202020"
//                     highlightColor="#444"
//                   />
//                 ) : (
//                   <S.TrackAuthorLink onClick={() => setSong(track)}>
//                     {track.author}
//                   </S.TrackAuthorLink>
//                 )}
//               </S.TrackAuthor>
//               <S.TrackAlbum>
//                 {isLoading ? (
//                   <Skeleton
//                     width={250}
//                     baseColor="#202020"
//                     highlightColor="#444"
//                   />
//                 ) : (
//                   <S.TrackAlbumLink>{track.album}</S.TrackAlbumLink>
//                 )}
//               </S.TrackAlbum>
//               {/* <FavoriteTrack

//                 setFavoriteTracks={setFavoriteTracks}
//               /> */}
//               <S.TrackTime>
//                 {isLoading ? (
//                   <Skeleton
//                     width={40}
//                     baseColor="#202020"
//                     highlightColor="#444"
//                   />
//                 ) : (
//                   <>
//                     {/* TrackLikeSvgActive */}
//                     {isLiked ? (
//                       <S.TrackLikeSvgActive
//                         alt="dislike"
//                         onClick={() => trackDisiked(track)}
//                       />
//                     ) : (
//                       <S.TrackLikeSvg
//                         alt="like"
//                         onClick={() => trackLiked(track)}
//                       />
//                     )}

//                     <S.TrackTimeText>
//                       {Math.floor(track.duration_in_seconds / 60) < 10
//                         ? `0${Math.floor(track.duration_in_seconds / 60)}`
//                         : Math.floor(track.duration_in_seconds / 60)}{' '}
//                       {Math.floor(track.duration_in_seconds % 60) < 9
//                         ? `0${Math.floor(track.duration_in_seconds % 60)}`
//                         : Math.floor(track.duration_in_seconds % 60)}
//                     </S.TrackTimeText>
//                   </>
//                 )}
//               </S.TrackTime>
//             </S.PlaylistTrack>
//           </S.PlaylistItem>
//         ))}
//       </>
//     )}
//   </S.ContentPlaylist>
// )
