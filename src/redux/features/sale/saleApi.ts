import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSale: builder.mutation({
      query: (saleInfo) => ({
        url: "/sales",
        method: "POST",
        body: saleInfo,
      }),
      invalidatesTags: ["gift"],
    }),
  }),
});

export const { useAddSaleMutation } = saleApi;
