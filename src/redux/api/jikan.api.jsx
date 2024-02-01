import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jikanApi = createApi({
  reducerPath: 'jikanApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4/'}),
  endpoints: (build) => ({
    getAnimeGenres: build.query({
      query: () => `genres/anime`,
      transformResponse: response => response.data.sort((a,b)=> {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
        return 0
      })
    }),
    getTopAnime: build.query({
      // type (string) tv | movie | ova | special | ona | music | cm | pv | tv-special
      // filter (string) airing | upcoming | bypopularity | favorite
      // rating (string) g (all) | pg (children)| pg13 (13+) | r17 (17+) | r (low nudity) | rx (hanime)
      // limit (number) count of item
      query: ({
        type = '', 
        filter = '',
        rating = '',
        limit = 5, 
      }) => `top/anime?${type}&filter=${filter}&rating=${rating}&limit=${limit}`,
      transformResponse: (response) =>  response.data.sort((a,b) =>  a.rank - b.rank)
    }),
    getTopManga: build.query({
      // type (string) manga | novel | lightnovel | oneshot | doujin | manhwa | manhua | one-shot 
      // filter (string) publishing | upcoming | bypopularity | favorite
      // limit (number) count of item
      query: ({
        type = '',
        filter = '',
        limit = 5
      }) => `top/manga?type=${type}&filter=${filter}&limit=${limit}`,
      transformResponse: response => response.data.sort((a,b) =>  a.rank - b.rank)
    })
  })
})


export const { useGetAnimeGenresQuery, useGetTopAnimeQuery, useGetTopMangaQuery} = jikanApi