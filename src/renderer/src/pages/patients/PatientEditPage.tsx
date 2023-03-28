import React from "react";
import { PatientForm } from '../../components/forms/PatientForm';
import { useNavigate, useParams } from "react-router-dom";
import { IPatient } from "../../types/IPatient";
import { patientApi } from "../../features/rtk-query/services/PatientService";

export const PatientEditPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updatePatient] = patientApi.useUpdatePatientMutation();
    
    const handleFormSubmit = (patient: IPatient) => {
        updatePatient({
            id: Number(id),
            body: patient,
        });

        return navigate("/patients");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Patient</h1>
            <PatientForm initialPatientId={Number(id)} onSubmit={handleFormSubmit} />
        </div>
    );
};
