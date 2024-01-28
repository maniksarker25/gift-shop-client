import { baseApi } from "../../api/baseApi";

const giftApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGifts: builder.query({
      query: (filters) => {
        console.log(filters);
        return {
          url: "/gifts",
          method: "GET",
          params: filters,
        };
      },
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
