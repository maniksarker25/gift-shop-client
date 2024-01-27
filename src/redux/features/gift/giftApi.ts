import { baseApi } from "../../api/baseApi";

const giftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGifts: builder.query({
      query: () => ({
        url: "/gifts",
        method: "GET",
      }),
      providesTags: ["gift"],
    }),
    addGift: builder.mutation({
      query: (giftInfo) => ({
        url: "/gifts",
        method: "POST",
        body: giftInfo,
      }),
      invalidatesTags: ["gift"],
    }),
  }),
});

export const { useGetGiftsQuery, useAddGiftMutation } = giftApi;
