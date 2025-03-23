import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL });

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: api,
  endpoints: () => ({}),
});
