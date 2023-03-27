import React, { useEffect, useState } from "react";
import { IPatient } from "../../types/IPatient";
import { phoneNumberFormatter } from "../../utils/phoneNumberFormatter";
import { Button } from "../ui/Button";
import { patientApi } from "../../features/rtk-query/services/PatientService";

type PatientCreateFormProps = {
    initialPatientId?: number | undefined;
    onSubmit: (patient: IPatient) => void;
};

interface PatientFormAttrs {
    name: string;
    surname: string;
    dateOfBirth: string;
    phoneNumber: string;
}

export const PatientForm: React.FC<PatientCreateFormProps> = ({ initialPatientId, onSubmit }) => {
    const { data: initialPatient } = patientApi.useFetchPatientByIdQuery(Number(initialPatientId));
    const [patient, setPatient] = useState({
        name: "", surname: "", dateOfBirth: "", phoneNumber: "",
    } as PatientFormAttrs);

    useEffect(() => {
        if (initialPatient) {
            setPatient({
                name: initialPatient.name || "",
                surname: initialPatient.surname || "",
                dateOfBirth: initialPatient.dateOfBirth?.toString() || "",
                phoneNumber: initialPatient.phoneNumber || "",
            });
        }
    }, [initialPatient]);

    const handleSubmit = () => {
        onSubmit({
            name: patient.name,
            surname: patient.surname,
            dateOfBirth: new Date(patient.dateOfBirth),
            phoneNumber: patient.phoneNumber,
        });
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPatient({ ...patient, phoneNumber: phoneNumberFormatter(e.target.value) });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                    value={patient.name}
                    onChange={(e) => setPatient({ ...patient, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="surname" className="block text-gray-300 font-bold mb-2">
                    Surname
                </label>
                <input
                    id="surname"
                    type="text"
                    className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                    value={patient.surname}
                    onChange={(e) => setPatient({ ...patient, surname: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="dateOfBirth" className="block text-gray-300 font-bold mb-2">
                    Date of Birth
                </label>
                <input
                    id="dateOfBirth"
                    type="date"
                    className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                    value={patient.dateOfBirth}
                    onChange={(e) => setPatient({ ...patient, dateOfBirth: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-gray-300 font-bold mb-2">
                    Phone Number
                </label>
                <input
                    id="phone"
                    type="tel"
                    className="bg-transparent border border-gray-700 p-2 w-full rounded-lg"
                    value={patient.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="(123) 456-7890"
                    required
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};