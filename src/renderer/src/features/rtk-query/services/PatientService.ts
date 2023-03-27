import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPatient } from "../../../types/IPatient";
import { Service } from "../../../api/AbstractService";

export const patientApi = createApi({
    reducerPath: "patientApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${Service.baseUrl}`,
    }),
    tagTypes: ["Patients"],
    endpoints: (build) => ({
        fetchAllPatients: build.query<IPatient[], number>({
            query: (limit: number = -1) => ({
                url: `/patients`,
            }),
            providesTags: ["Patients"],
        }),
        fetchPatientById: build.query<IPatient, number>({
            query: (id) => ({
                url: `/patients/${id}`,
            }),
            providesTags: ["Patients"],
        }),
        storePatient: build.mutation<IPatient, Partial<IPatient>>({
            query: (body) => ({
                url: `/patients`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ["Patients"],
        }),
        updatePatient: build.mutation<IPatient, { id: number; body: Partial<IPatient> }>({
            query: ({ id, body }) => ({
                url: `/patients/${id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ["Patients"],
        }),
        deletePatient: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/patients/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["Patients"],
        }),
    }),
});