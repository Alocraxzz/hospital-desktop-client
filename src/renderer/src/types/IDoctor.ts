import { IAppointment } from "./IAppointment";
import { IMedicalRecord } from "./IMedicalRecord";

export interface IDoctor {
    id?: number;
    name?: string;
    surname?: string;
    speciality?: string;
    phoneNumber?: string;
    appointments?: IAppointment[];
    medicalRecords?: IMedicalRecord[];
}