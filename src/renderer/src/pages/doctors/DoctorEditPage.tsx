import React from "react";
import { DoctorForm } from "../../components/forms/DoctorForm";
import { useNavigate, useParams } from "react-router-dom";
import { IDoctor } from "../../types/IDoctor";
import { doctorApi } from "../../features/rtk-query/services/DoctorService";

export const DoctorEditPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateDoctor] = doctorApi.useUpdateDoctorMutation();
    const { data: doctor} = doctorApi.useFetchDoctorByIdQuery(Number(id));

    const handleFormSubmit = (doctor: IDoctor) => {
        updateDoctor({
            id: Number(id),
            body: doctor,
        });

        return navigate("/doctors");
    };

    return (
        <div className="max-w-lg mx-auto my-8">
            <h1 className="text-3xl font-bold mb-4">Create Doctor</h1>
            <DoctorForm initialValue={doctor} onSubmit={handleFormSubmit}/>
        </div>
    );
};
