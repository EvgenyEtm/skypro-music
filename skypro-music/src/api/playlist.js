import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TRACKS_TAG = 'tracks'

export const playlistApi = createApi({
  reducerPath: 'playlistApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
  }),
  endpoints: (builder) => ({
    getMainPlaylist: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: () => [TRACKS_TAG],
    }),
    getFavoritePlaylist: builder.query({
      query: (token) => ({
        url: '/catalog/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: () => [TRACKS_TAG],
    }),

    setLike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    setDislike: builder.mutation({
      query: (track) => ({
        url: `/catalog/track/${track.id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'Favorites', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
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
