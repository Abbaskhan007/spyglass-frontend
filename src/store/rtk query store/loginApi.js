import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-url.com/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: JSON.stringify({ email, password }),
      }),
    }),
  }),
});

export const { useLoginQuery } = loginApi;
