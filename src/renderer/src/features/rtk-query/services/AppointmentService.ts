import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAppointment } from "../../../types/IAppointment";
import { Service } from "../../../api/AbstractService";

export const appointmentApi = createApi({
    reducerPath: "appointmentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${Service.baseUrl}`,
    }),
    tagTypes: ["Appointments"],
    endpoints: (build) => ({
        fetchAllAppointments: build.query<IAppointment[], number>({
            query: (limit: number = -1) => ({
                url: `/appointments`,
            }),
            providesTags: ["Appointments"],
        }),
        fetchAppointmentById: build.query<IAppointment, number>({
            query: (id) => ({
                url: `/appointments/${id}`,
            }),
            providesTags: ["Appointments"],
        }),
        storeAppointment: build.mutation<IAppointment, Partial<IAppointment>>({
            query: (body) => ({
                url: `/appointments`,
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ["Appointments"],
        }),
        updateAppointment: build.mutation<IAppointment, { id: number; body: Partial<IAppointment> }>({
            query: ({ id, body }) => ({
                url: `/appointments/${id}`,
                method: 'PUT',
                body: body,
            }),
            invalidatesTags: ["Appointments"],
        }),
        deleteAppointment: build.mutation<{ success: boolean; id: number }, number>({
            query(id) {
                return {
                    url: `/appointments/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["Appointments"],
        }),
    }),
});