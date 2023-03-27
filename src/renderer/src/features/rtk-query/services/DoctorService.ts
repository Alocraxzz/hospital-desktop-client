import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDoctor } from "../../../types/IDoctor";
import { Service } from "../../../api/AbstractService";

export const doctorApi = createApi({
    reducerPath: "doctorApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${Service.baseUrl}`,
    }),
    tagTypes: ["Doctors"],
    endpoints: (build) => ({
        fetchAllDoctors: build.query<IDoctor[], number>({
            query: (limit: number = -1) => ({
                url: `/doctors`,
            }),
            providesTags: ["Doctors"],
        }),
        fetchDoctorById: build.query<IDoctor, number>({
            query: (id) => ({
                url: `/doctors/${id}`,
            }),
            providesTags: ["Doctors"],
        }),
        storeDoctor: build.mutation<IDoctor, Partial<IDoctor>>({
            query: (body) => ({
                url: `/doctors`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ["Doctors"],
        }),
        updateDoctor: build.mutation<IDoctor, { id: number; body: Partial<IDoctor> }>({
            query: ({ id, body }) => ({
                url: `/doctors/${id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ["Doctors"],
        }),
        deleteDoctor: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/doctors/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["Doctors"],
        }),
    }),
});