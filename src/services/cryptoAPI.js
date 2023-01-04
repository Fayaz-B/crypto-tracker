// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headerParams = {
  "X-RapidAPI-Host": import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CRYPTO_BASEURL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Host", headerParams["X-RapidAPI-Host"]);
      headers.set("X-RapidAPI-Key", headerParams["X-RapidAPI-Key"]);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllCoin: builder.query({
      query: (limit) => ({ url: `/coins?limit=${limit}` }),
    }),
    getCoinDetail: builder.query({
      query: (coinId) => ({ url: `/coin/${coinId}` }),
    }),
    getCoinHistory: builder.query({
      query: ({ id, timeperiod }) => ({
        url: `/coin/${id}/history?timePeriod=${timeperiod}`,
      }),
    }),
    getExchanges: builder.query({
      query: () => ({
        url: `/exchanges`,
      }),
    }),
  }),
});

export const {
  useGetAllCoinQuery,
  useGetCoinDetailQuery,
  useGetCoinHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
