import React from "react";
import { useNavigate } from "react-router-dom";
import { AppointmentForm } from "../../components/forms/AppointmentForm";
import { IAppointment } from "../../types/IAppointment";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { appointmentApi } from "../../features/rtk-query/services/AppointmentService";

export const AppointmentCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const { data: patients} = patientApi.useFetchAllPatientsQuery();
    const { data: doctors} = doctorApi.useFetchAllDoctorsQuery();
    const [storeAppointment] = appointmentApi.useStoreAppointmentMutation();

    const handleFormSubmit = (appointment: IAppointment) => {
        storeAppointment(appointment);

        return navigate("/appointments");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Appointment</h1>
            <AppointmentForm patients={patients} doctors={doctors} onSubmit={handleFormSubmit}/>
        </div>
    );
};
