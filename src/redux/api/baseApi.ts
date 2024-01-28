import {
  //   BaseQueryApi,
  //   BaseQueryFn,
  //   DefinitionType,
  //   FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { RootState } from "../store";

import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://gift-shop-management-backend.vercel.app/api",

  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.token;
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

// //* making costume base query

// // const costumeBaseQuery: BaseQueryFn<
// //   FetchArgs,
// //   BaseQueryApi,
// //   DefinitionType
// // > = async (args, api, extraOptions): Promise<any> => {
// //   let result = await baseQuery(args, api, extraOptions);
// //   console.log(result);
// //   if (result.error?.status === 401) {
// //     //* send refresh token for get access token
// //     const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
// //       method: "POST",
// //       credentials: "include",
// //     });
// //     const data = await res.json();
// //     console.log(data);
// //     if (data?.data?.accessToken) {
// //       const user = (api.getState() as RootState).auth.user;
// //       api.dispatch(
// //         setUser({
// //           user,
// //           token: data.data.accessToken,
// //         })
// //       );
// //       result = await baseQuery(args, api, extraOptions);
// //     } else {
// //       api.dispatch(logout());
// //     }
// //   }
// //   return result;
// // };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["gift", "sale"],
  endpoints: () => ({}),
});
