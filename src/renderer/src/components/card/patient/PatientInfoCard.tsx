import React from "react";
import { IPatient } from "../../../types/IPatient";
import { AppointmentsTable } from "../../table/appointmentsTable/AppointmentsTable";
import { MedicalRecordsTable } from "../../table/medicalRecordsTable/MedicalRecordsTable";
import { Header } from "../../ui/Header";

interface PatientInfoCardProps {
    patient: IPatient;
    printAdditionalTables?: boolean;
}

export const PatientInfoCard: React.FC<PatientInfoCardProps> = ({
    patient: {
        name,
        surname,
        dateOfBirth,
        phoneNumber,
        appointments,
        medicalRecords,
    },
    printAdditionalTables,
}) => {
    return (
        <div className="flex flex-col mb-2">
            <div className="text-md bg-transparent border border-slate-700 shadow-md rounded-md p-4">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    {name} {surname}
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-400">
                            Date of birth:{" "}
                            <span className="font-semibold text-white">
                                {dateOfBirth?.toLocaleString()}
                            </span>
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
                        <Header>Patient appointments</Header>
                        {appointments ? (
                            <AppointmentsTable appointments={appointments} />
                        ) : (
                            <>Nothing was found</>
                        )}
                    </div>
                    <div className="my-5">
                        <Header>Patient medical records</Header>
                        {medicalRecords ? (
                            <MedicalRecordsTable medicalRecords={medicalRecords} />
                        ) : (
                            <>Nothing was found</>
                        )}
                    </div>
                </div>
            }
        </div>
    );
};
