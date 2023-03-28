import React from "react";
import { IAppointment } from "../../../types/IAppointment";
import { DoctorInfoCard } from "../doctor/DoctorInfoCard";
import { PatientInfoCard } from "../patient/PatientInfoCard";

interface AppointmentInfoCardProps {
    appointment: IAppointment;
}

export const AppointmentInfoCard: React.FC<AppointmentInfoCardProps> = ({ appointment }) => {
    const { patient, doctor, date, reason } = appointment;

    return (
        <div className="flex flex-col">
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Appointment patient
                </h2>
                {patient && <PatientInfoCard patient={patient} />}
            </div>
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Appointment doctor
                </h2>
                {doctor && <DoctorInfoCard doctor={doctor} />}
            </div>
            <div className="my-3">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    Appointment
                </h2>
                <div className="text-md bg-transparent border border-slate-700 shadow-md rounded-md p-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-3/4">
                            <p className="text-gray-400">
                                Date: <span className="font-semibold text-white">{date?.toString()}</span>
                            </p>
                            <p className="text-gray-400">
                                Reason: <span className="font-semibold text-white break-all">{reason}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
