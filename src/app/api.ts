import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const api = fetchBaseQuery({

  prepareHeaders: (headers, { getState }) => {
    const { arena } = getState() as RootState;
    const { id_token } = arena;
    if (id_token) {
      headers.set('authorization', `${id_token}`);
    }
    return headers;
  },
  baseUrl: import.meta.env.VITE_API_URL
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: api,
  endpoints: () => ({}),
});
