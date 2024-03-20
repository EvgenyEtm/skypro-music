import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TRACKS_TAG = 'tracks'

//asdasdzxc@gmail.com

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',

    prepareHeaders: async (headers, { getState }) => {
      const token = await getState().auth.access
      const savetoken = localStorage
        .getItem('accessToken')
        .replace(/['"«»]/g, '')
      console.log(token)
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        //console.log('create headers')
        headers.set('Authorization', `Bearer ${token}`)
      } else {
        headers.set('Authorization', `Bearer ${savetoken}`)
      }
      console.log(headers)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getMainPlaylist: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: () => [TRACKS_TAG],
    }),
    getFavoritePlaylist: builder.query({
      query: (token) => ({
        console: console.log(token),
        url: '/catalog/track/favorite/all/',
        // headers: {
        //   Authorization: `Bearer ${localStorage
        //     .getItem('accessToken')
        //     .replace(/['"«»{}]/g, '')}`,
        // },
      }),
      providesTags: () => [TRACKS_TAG],
    }),

    setLike: builder.mutation({
      query: ({ track }) => ({
        console: console.log(track.id),
        // console: console.log(token),
        url: `/catalog/track/${track.id}/favorite/`,
        method: 'POST',
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   // Authorization: `Bearer ${localStorage
        //   //   .getItem('accessToken')
        //   //   .replace(/['"«»{}]/g, '')}`,
        // },
      }),
    }),

    setDislike: builder.mutation({
      query: ({ track }) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: 'DELETE',
        console: `delete create${track.id}`,
        // headers: {
        //   Authorization: `Bearer ${localStorage
        //     .getItem('accessToken')
        //     .replace(/['"«»{}]/g, '')}`,
        // },
      }),
    }),
  }),
})
//по аналогии добавить запрос для лайка и диз.
//query get запрос put -
//likeTrack: builder.mutation

export const {
  useGetMainPlaylistQuery,
  useGetFavoritePlaylistQuery,
  useSetLikeMutation,
  useSetDislikeMutation,
} = playlistApi

// export default function MainPage() {
//   const { data, error, isLoading } = useGetMainPlaylistQuery()

//   return <Tracklist tracks={data} error={error} loading={isLoading} />
// }
