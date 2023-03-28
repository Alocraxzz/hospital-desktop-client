import { IDoctor } from "./IDoctor";
import { IPatient } from "./IPatient";

export class IAppointment {
    id?: number;
    patientId?: number;
    doctorId?: number;
    date?: Date;
    reason?: string;
    patient?: IPatient;
    doctor?: IDoctor;
}