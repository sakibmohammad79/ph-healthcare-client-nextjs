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
    // getAllDoctors: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/doctor",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: IDoctor[], meta: TMeta) => {
    //     return {
    //       doctors: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.doctor],
    // }),
    // deleteDoctor: build.mutation({
    //   query: (id) => ({
    //     url: `/doctor/soft/${id}`,
    //     method: "PATCH",
    //   }),
    //   invalidatesTags: [tagTypes.doctor],
    // }),
  }),
});

export const { useCreateSchedulesMutation } = scheduleApi;
