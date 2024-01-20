import { configureStore } from "@reduxjs/toolkit"
import { jikanApi } from "./api/jikan.api"

export const store = configureStore({
  reducer:{

    [jikanApi.reducerPath] : jikanApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jikanApi.middleware),
})