import { baseApi } from "../../api/baseApi";

const saleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: (filter) => {
        const params = new URLSearchParams();
        if (filter) {
          params.append("filter", filter);
        }
        return {
          url: "/sales",
          method: "GET",
          params: params,
        };
      },
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
