import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const myProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useMyProfileQuery } = myProfileApi;
