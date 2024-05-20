import { TMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
import { IDoctor } from "@/types/doctor";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),
    getSingleDoctor: build.query({
      query: (id: string) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.doctor],
    }),
    deleteDoctor: build.mutation({
      query: (id: string) => ({
        url: `/doctor/soft/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    updateDoctor: build.mutation({
      query: (data) => ({
        url: `/doctor/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.doctor, tagTypes.user],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
  useGetSingleDoctorQuery,
  useUpdateDoctorMutation,
} = doctorsApi;
