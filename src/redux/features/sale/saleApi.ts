import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/sales",
        method: "GET",
      }),
      providesTags: ["sale"],
    }),
    addSale: builder.mutation({
      query: (saleInfo) => ({
        url: "/sales",
        method: "POST",
        body: saleInfo,
      }),
      invalidatesTags: ["gift", "sale"],
    }),
  }),
});

export const { useAddSaleMutation, useGetSalesQuery } = saleApi;
