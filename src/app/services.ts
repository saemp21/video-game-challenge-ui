import { baseApi } from "./api";

export const service = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query<{ code: number; data: unknown }, void>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
    }),
    login: build.mutation<
      { code: number; data: unknown },
      { password: string; email: string }
    >({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useProfileQuery, useLoginMutation } = service;
