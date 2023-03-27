import axios from "axios";
import { IMedicalRecord } from "../types/IMedicalRecord";
import { Service } from "./AbstractService";

export class MedicalRecordService extends Service {
    static async getAll() {
        try {
            const response = await axios.get<IMedicalRecord[]>(`${this.base}/medical-records`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(id: number) {
        try {
            const response = await axios.get<IMedicalRecord>(`${this.base}/medical-records/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async create(doctor: IMedicalRecord) {
        try {
            const response = await axios.post<IMedicalRecord>(`${this.base}/medical-records`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async udpate(doctor: IMedicalRecord) {
        try {
            const response = await axios.put<Number>(`${this.base}/medical-records/${doctor.id}`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(id: number) {
        try {
            const response = await axios.delete<Number>(`${this.base}/medical-records/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}