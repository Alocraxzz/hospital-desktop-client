import React from "react";
import { useNavigate } from 'react-router-dom';
import { PatientForm } from '../../components/forms/PatientForm';
import { IPatient } from '../../types/IPatient';
import { patientApi } from "../../features/rtk-query/services/PatientService";

export const PatientCreatePage: React.FC = () => {
    const [storePatient, { isLoading }] = patientApi.useStorePatientMutation();
    const navigate = useNavigate();
    
    const handleFormSubmit = (patient: IPatient) => {
        storePatient(patient);

        !isLoading && navigate("/patients");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Patient</h1>
            <PatientForm onSubmit={handleFormSubmit} />
        </div>
    );
};
