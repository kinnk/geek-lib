import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jikanApi = createApi({
  reducerPath: 'jikanApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4/'}),
  endpoints: (build) => ({
    getTopAnime: build.query({
      query: (limit = 5) => `top/anime?limit=${limit}&filter=airing`,
      transformResponse: response =>  response.data
    }),
  })
})


export const { useGetTopAnimeQuery } = jikanApi