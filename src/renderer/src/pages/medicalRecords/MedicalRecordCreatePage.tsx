import React from "react";
import { useNavigate } from "react-router-dom";
import { MedicalRecordForm } from "../../components/forms/MedicalRecordForm";
import { IMedicalRecord } from "../../types/IMedicalRecord";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";

export const MedicalRecordCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const { data: patients } = patientApi.useFetchAllPatientsQuery();
    const { data: doctors } = doctorApi.useFetchAllDoctorsQuery();
    const [storeMedicalRecord] = medicalRecordApi.useStoreMedicalRecordMutation();

    const handleFormSubmit = (medicalRecord: IMedicalRecord) => {
        storeMedicalRecord(medicalRecord);

        return navigate("/medical-records");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Medical record</h1>
            <MedicalRecordForm
                patients={patients}
                doctors={doctors}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};
