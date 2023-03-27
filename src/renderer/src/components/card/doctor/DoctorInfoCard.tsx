import React from "react";
import { IDoctor } from "../../../types/IDoctor";
import { AppointmentsTable } from "../../table/appointmentsTable/AppointmentsTable";
import { MedicalRecordsTable } from "../../table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../ui/Header";

interface DoctorInfoCardProps {
    doctor: IDoctor;
    printAdditionalTables?: boolean;
}

export const DoctorInfoCard: React.FC<DoctorInfoCardProps> = ({
    doctor: {
        name,
        surname,
        phoneNumber,
        speciality,
        appointments,
        medicalRecords,
    },
    printAdditionalTables,
}) => {
    return (
        <div className="flex flex-col">
            <div className="text-md bg-transparent border border-slate-700 shadow-md rounded-md p-4">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    {name} {surname}
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-400">
                            Speciality: <span className="font-semibold text-white">{speciality}</span>
                        </p>
                        <p className="text-gray-400">
                            Phone: <span className="font-semibold text-white">{phoneNumber}</span>
                        </p>
                    </div>
                </div>
            </div>
            {printAdditionalTables &&
                <div>
                    <div className="my-5">
                        <Header>Doctors appointments</Header>
                        {appointments ? (
                            <AppointmentsTable appointments={appointments}/>
                        ) : (
                            <>Nothing was found</>
                        )}
                    </div>
                    <div className="my-5">
                        <Header>Doctors medical records</Header>
                        {medicalRecords ? (
                            <MedicalRecordsTable medicalRecords={medicalRecords}/>
                        ) : (
                            <>Nothing was found</>
                        )}
                    </div>
                </div>
            }
        </div>
    );
};
