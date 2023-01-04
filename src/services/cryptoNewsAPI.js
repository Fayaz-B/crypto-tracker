import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headerParams = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_NEWS_RAPIDAPI_HOST,
};

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_NEWS_BASEURL,
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", headerParams["X-BingApis-SDK"]);
      headers.set("X-RapidAPI-Key", headerParams["X-RapidAPI-Key"]);
      headers.set("X-RapidAPI-Host", headerParams["X-RapidAPI-Host"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => ({
        url: `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
