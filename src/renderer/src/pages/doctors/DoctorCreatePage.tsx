import React from "react";
import { useNavigate } from "react-router-dom";
import { DoctorForm } from "../../components/forms/DoctorForm";
import { IDoctor } from "../../types/IDoctor";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";

export const DoctorCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const [storeDoctor, { isLoading: isStoring }] = doctorApi.useStoreDoctorMutation();

    const handleFormSubmit = (doctor: IDoctor) => {
        storeDoctor(doctor);

        !isStoring && navigate("/doctors");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Doctor</h1>
            <DoctorForm onSubmit={handleFormSubmit}/>
        </div>
    );
};
