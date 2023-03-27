import { IAppointment } from "./IAppointment";
import { IMedicalRecord } from "./IMedicalRecord";

export interface IPatient {
    id?: number;
    name?: string;
    surname?: string;
    dateOfBirth?: Date;
    phoneNumber?: string;
    appointments?: IAppointment[];
    medicalRecords?: IMedicalRecord[];
}