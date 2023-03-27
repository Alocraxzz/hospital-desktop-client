import React, { useEffect, useState } from "react";
import { IDoctor } from "../../types/IDoctor";
import { phoneNumberFormatter } from "../../utils/phoneNumberFormatter";
import { Button } from "../ui/Button";

type DoctorCreateFormProps = {
    initialValue?: IDoctor | undefined;
    onSubmit: (doctor: IDoctor) => void;
};

interface DoctorFormAttrs {
    name: string;
    surname: string;
    speciality: string;
    phoneNumber: string;
}

export const DoctorForm: React.FC<DoctorCreateFormProps> = ({ initialValue, onSubmit }) => {
    const [doctor, setDoctor] = useState({
        name: "", surname: "", speciality: "", phoneNumber: "",
    } as DoctorFormAttrs);

    useEffect(() => {
        if (initialValue) {
            setDoctor({
                name: initialValue.name || "",
                surname: initialValue.surname || "",
                speciality: initialValue.speciality?.toString() || "",
                phoneNumber: initialValue.phoneNumber || "",
            });
        }
    }, [initialValue]);

    const handleSubmit = () => {
        if (doctor) {
            onSubmit({
                name: doctor.name,
                surname: doctor.surname,
                speciality: doctor.speciality,
                phoneNumber: doctor.phoneNumber,
            });
        }
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDoctor({ ...doctor, phoneNumber: phoneNumberFormatter(e.target.value) });
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
                    className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                    value={doctor.name}
                    onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
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
                    className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                    value={doctor.surname}
                    onChange={(e) => setDoctor({ ...doctor, surname: e.target.value })}
                    required
                />
            </div>
            <div>
                <label htmlFor="speciality" className="block text-gray-300 font-bold mb-2">
                    Speciality
                </label>
                <input
                    id="speciality"
                    type="text"
                    className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                    value={doctor.speciality}
                    onChange={(e) => setDoctor({ ...doctor, speciality: e.target.value })}
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
                    className="bg-transparent border border-slate-800 p-2 w-full rounded-lg"
                    value={doctor.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="(123) 456-7890"
                    required
                />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};