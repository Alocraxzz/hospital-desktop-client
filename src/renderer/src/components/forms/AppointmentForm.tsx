import React, { useEffect, useState } from "react";
import { IAppointment } from "../../types/IAppointment";
import { IDoctor } from "../../types/IDoctor";
import { IPatient } from "../../types/IPatient";
import { Button } from "../ui/Button";

interface IAppointmentFormProps {
    initialValue?: IAppointment | undefined;
    patients: IPatient[] | undefined;
    doctors: IDoctor[] | undefined;
    onSubmit: (appointment: IAppointment) => void;
}

interface IAppointmentFormAttrs {
    patientId?: number;
    doctorId?: number;
    date?: string;
    reason?: string;
}

export const AppointmentForm: React.FC<IAppointmentFormProps> = ({ initialValue, patients, doctors, onSubmit }) => {
    const [appointment, setAppointment] = useState({
        patientId: undefined, doctorId: undefined, date: "", reason: "",
    } as IAppointmentFormAttrs);

    useEffect(() => {
        if (initialValue) {
            setAppointment({
                patientId: initialValue.patientId,
                doctorId: initialValue.doctorId,
                date: initialValue.date?.toLocaleString() || "",
                reason: initialValue.reason || "",
            });
        }
    }, [initialValue]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (appointment) {
            onSubmit({
                patientId: appointment.patientId,
                doctorId: appointment.doctorId,
                date: new Date(appointment.date || ""),
                reason: appointment.reason,
            });
        }
    };

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="patient" className="block text-gray-300 font-bold mb-2">
                        Patient
                    </label>
                    <select
                        id="patient"
                        value={appointment.patientId}
                        onChange={(event) => setAppointment({ ...appointment, patientId: Number(event.target.value) })}
                        className="bg-transparent border border-slate-800 block appearance-none w-full py-2 px-3 rounded-lg leading-tight"
                        required
                    >
                        <option value="">Select a patient</option>
                        {patients && patients.map((patient: IPatient) => (
                            <option key={patient.id} value={patient.id}>
                                {`${patient.name} ${patient.surname}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="doctor" className="block text-gray-300 font-bold mb-2">
                        Doctor
                    </label>
                    <select
                        id="doctor"
                        value={appointment.doctorId}
                        onChange={(event) => setAppointment({ ...appointment, doctorId: Number(event.target.value) })}
                        className="bg-transparent border border-slate-800 block appearance-none w-full py-2 px-3 rounded-lg leading-tight"
                        required
                    >
                        <option value="">Select a doctor</option>
                        {doctors && doctors.map((doctor: IDoctor) => (
                            <option key={doctor.id} value={doctor.id}>
                                {`${doctor.name} ${doctor.surname}`}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="date" className="block text-gray-300 font-bold mb-2">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={appointment.date}
                        onChange={(event) => setAppointment({ ...appointment, date: event.target.value })}
                        className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                        required
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="reason" className="block text-gray-300 font-bold mb-2">
                        Reason
                    </label>
                    <textarea
                        id="reason"
                        value={appointment.reason}
                        onChange={(event) => setAppointment({ ...appointment, reason: event.target.value })}
                        className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                        style={{ height: "auto", minHeight: "10rem", maxHeight: "20rem" }}
                        required
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};