import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { patientApi } from "./services/PatientService";
import { doctorApi } from "./services/DoctorService";
import { appointmentApi } from "./services/AppointmentService";
import { medicalRecordApi } from "./services/MedicalRecordService";

const rootReducer = combineReducers({
    [patientApi.reducerPath]: patientApi.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [medicalRecordApi.reducerPath]: medicalRecordApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(patientApi.middleware)
            .concat(doctorApi.middleware)
            .concat(appointmentApi.middleware)
            .concat(medicalRecordApi.middleware)
});

setupListeners(store.dispatch);