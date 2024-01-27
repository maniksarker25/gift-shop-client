import { baseApi } from "../../api/baseApi";

const giftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGifts: builder.query({
      query: () => ({
        url: "/gift",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGiftsQuery } = giftApi;
