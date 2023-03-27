import axios from "axios";
import { IPatient } from "../types/IPatient";
import { Service } from "./AbstractService";

export class PatientService extends Service {
    static async getAll() {
        try {
            const response = await axios.get<IPatient[]>(`${this.baseUrl}/patients`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(id: number) {
        try {
            const response = await axios.get<IPatient>(`${this.baseUrl}/patients/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async create(patient: IPatient) {
        try {
            const response = await axios.post<IPatient>(`${this.baseUrl}/patients`, patient);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(id: number, patient: IPatient) {
        try {
            const response = await axios.put<Number>(`${this.baseUrl}/patients/${id}`, patient);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(id: number) {
        try {
            const response = await axios.delete<Number>(`${this.baseUrl}/patients/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}