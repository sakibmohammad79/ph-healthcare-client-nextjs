import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorScheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctorSchedules: build.mutation({
      query: (data: any) => ({
        url: "/doctor-schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.doctorSchedule],
    }),
    getSingleDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor-schedule/my-schedule",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any, meta: TMeta) => {
        return {
          doctorSchedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.schedule],
    }),
    deleteDoctorSchedule: build.mutation({
      query: (id: string) => ({
        url: `/doctor-schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctorSchedule],
    }),
  }),
});

export const {
  useCreateDoctorSchedulesMutation,
  useGetSingleDoctorSchedulesQuery,
  useDeleteDoctorScheduleMutation,
} = doctorScheduleApi;
