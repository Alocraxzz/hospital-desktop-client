import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMedicalRecord } from "../../../types/IMedicalRecord";
import { Service } from "../../../api/AbstractService";

export const medicalRecordApi = createApi({
    reducerPath: "medicalRecordApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${Service.baseUrl}`,
    }),
    tagTypes: ["MedicalRecords"],
    endpoints: (build) => ({
        fetchAllMedicalRecords: build.query<IMedicalRecord[], number>({
            query: (limit: number = -1) => ({
                url: `/medical-records`,
            }),
            providesTags: ["MedicalRecords"],
        }),
        fetchMedicalRecordById: build.query<IMedicalRecord, number>({
            query: (id) => ({
                url: `/medical-records/${id}`,
            }),
            providesTags: ["MedicalRecords"],
        }),
        storeMedicalRecord: build.mutation<IMedicalRecord, Partial<IMedicalRecord>>({
            query: (body) => ({
                url: `/medical-records`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ["MedicalRecords"],
        }),
        updateMedicalRecord: build.mutation<IMedicalRecord, { id: number; body: Partial<IMedicalRecord> }>({
            query: ({ id, body }) => ({
                url: `/medical-records/${id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ["MedicalRecords"],
        }),
        deleteMedicalRecord: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/medical-records/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["MedicalRecords"],
        }),
    }),
});