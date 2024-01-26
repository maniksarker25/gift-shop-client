import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => ({
        url: "auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (loginInfo) => ({
        url: "auth/login",
        method: "POST",
        body: loginInfo,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
