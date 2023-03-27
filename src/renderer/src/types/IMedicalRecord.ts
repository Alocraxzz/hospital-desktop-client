import { IDoctor } from "./IDoctor";
import { IPatient } from "./IPatient";

export interface IMedicalRecord {
    id?: number;
    patientId?: number;
    doctorId?: number;
    date?: Date;
    diagnosis?: string;
    prescription?: string;
    patient?: IPatient;
    doctor?: IDoctor;
}