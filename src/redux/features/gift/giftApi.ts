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
    updateGift: builder.mutation({
      query: (options) => {
        console.log(options);
        return {
          url: `/gifts/${options.id}`,
          method: "PUT",
          body: options?.data,
        };
      },
      invalidatesTags: ["gift"],
    }),
    deleteSingleGift: builder.mutation({
      query: (id) => {
        return {
          url: `/gifts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["gift"],
    }),
    deleteMultipleGift: builder.mutation({
      query: (ids) => {
        console.log(ids);
        return {
          url: `/gifts/delete-gifts`,
          method: "POST",
          body: ids,
        };
      },
      invalidatesTags: ["gift"],
    }),
  }),
});

export const {
  useGetGiftsQuery,
  useAddGiftMutation,
  useUpdateGiftMutation,
  useDeleteSingleGiftMutation,
  useDeleteMultipleGiftMutation,
} = giftApi;
