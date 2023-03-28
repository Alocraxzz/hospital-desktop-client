import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MedicalRecordForm } from "../../components/forms/MedicalRecordForm";
import { IMedicalRecord } from "../../types/IMedicalRecord";
import { patientApi } from "../../features/rtk-query/services/PatientService";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";
import { medicalRecordApi } from "../../features/rtk-query/services/MedicalRecordService";

export const MedicalRecordEditPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateMedicalRecord] = medicalRecordApi.useUpdateMedicalRecordMutation();
    const { data: patients } = patientApi.useFetchAllPatientsQuery();
    const { data: doctors } = doctorApi.useFetchAllDoctorsQuery();
    const { data: medicalRecord } = medicalRecordApi.useFetchMedicalRecordByIdQuery(Number(id));

    const handleFormSubmit = (medicalRecord: IMedicalRecord) => {
        updateMedicalRecord({
            id: Number(id),
            body: medicalRecord,
        });

        return navigate("/medical-records");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Edit Medical record</h1>
            <MedicalRecordForm
                initialValue={medicalRecord}
                patients={patients}
                doctors={doctors}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};
