import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedules: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.schedule],
    }),
    getAllSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: [], meta: TMeta) => {
        return {
          schedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),
    // deleteDoctor: build.mutation({
    //   query: (id) => ({
    //     url: `/doctor/soft/${id}`,
    //     method: "PATCH",
    //   }),
    //   invalidatesTags: [tagTypes.doctor],
    // }),
  }),
});

export const { useCreateSchedulesMutation, useGetAllSchedulesQuery } =
  scheduleApi;
