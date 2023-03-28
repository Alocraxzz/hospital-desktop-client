import React, { useEffect, useState } from "react";
import { IMedicalRecord } from "../../types/IMedicalRecord";
import { IDoctor } from "../../types/IDoctor";
import { IPatient } from "../../types/IPatient";
import { Button } from "../ui/Button";

interface IMedicalRecordFormProps {
    initialValue?: IMedicalRecord | undefined;
    patients: IPatient[] | undefined;
    doctors: IDoctor[] | undefined;
    onSubmit: (medicalRecord: IMedicalRecord) => void;
}

interface IMedicalRecordFormAttrs {
    patientId?: number;
    doctorId?: number;
    date?: string;
    diagnosis?: string;
    prescription?: string;
}

export const MedicalRecordForm: React.FC<IMedicalRecordFormProps> = ({ initialValue, patients, doctors, onSubmit }) => {
    const [medicalRecord, setMedicalRecord] = useState({
        patientId: undefined, doctorId: undefined, date: "", diagnosis: "", prescription: "",
    } as IMedicalRecordFormAttrs);

    useEffect(() => {
        if (initialValue) {
            setMedicalRecord({
                patientId: initialValue.patientId,
                doctorId: initialValue.doctorId,
                date: initialValue.date?.toString() || "",
                diagnosis: initialValue.diagnosis || "",
                prescription: initialValue.prescription || "",
            });
        }
    }, [initialValue]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (medicalRecord) {
            onSubmit({
                patientId: medicalRecord.patientId,
                doctorId: medicalRecord.doctorId,
                date: new Date(medicalRecord.date || ""),
                diagnosis: medicalRecord.diagnosis || "",
                prescription: medicalRecord.prescription || "",
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
                        value={medicalRecord.patientId}
                        onChange={(event) => setMedicalRecord({ ...medicalRecord, patientId: Number(event.target.value) })}
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
                        value={medicalRecord.doctorId}
                        onChange={(event) => setMedicalRecord({ ...medicalRecord, doctorId: Number(event.target.value) })}
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
                        value={medicalRecord.date}
                        onChange={(event) => setMedicalRecord({ ...medicalRecord, date: event.target.value })}
                        className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                        required
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="diagnosis" className="block text-gray-300 font-bold mb-2">
                        Diagnosis
                    </label>
                    <textarea
                        id="diagnosis"
                        value={medicalRecord.diagnosis}
                        onChange={(event) => setMedicalRecord({ ...medicalRecord, diagnosis: event.target.value })}
                        className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                        required
                    />
                </div>
                <div className="flex flex-wrap mb-6">
                    <label htmlFor="prescription" className="block text-gray-300 font-bold mb-2">
                        Prescription
                    </label>
                    <textarea
                        id="prescription"
                        value={medicalRecord.prescription}
                        onChange={(event) => setMedicalRecord({ ...medicalRecord, prescription: event.target.value })}
                        className="bg-transparent border border-slate-800 p-2 w-full rounded-lg h-auto"
                        style={{ height: "auto", minHeight: "10rem", maxHeight: "20rem" }}
                        required
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};