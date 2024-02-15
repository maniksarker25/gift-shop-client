import { baseApi } from "../../api/baseApi";

const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCoupons: builder.query({
      query: () => {
        return {
          url: "/coupons",
          method: "GET",
        };
      },
      providesTags: ["coupon"],
    }),
    createCoupon: builder.mutation({
      query: (couponInfo) => ({
        url: "/coupons",
        method: "POST",
        body: couponInfo,
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});

export const { useCreateCouponMutation, useGetCouponsQuery } = couponApi;
