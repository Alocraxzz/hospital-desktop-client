import axios from "axios";
import { IDoctor } from "../types/IDoctor";
import { Service } from "./AbstractService";

export class DoctorService extends Service {
    static async getAll() {
        try {
            const response = await axios.get<IDoctor[]>(`${this.base}/doctors`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getOne(id: number) {
        try {
            const response = await axios.get<IDoctor>(`${this.base}/doctors/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async create(doctor: IDoctor) {
        try {
            const response = await axios.post<IDoctor>(`${this.base}/doctors`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async update(doctor: IDoctor) {
        try {
            const response = await axios.put<Number>(`${this.base}/doctors/${doctor.id}`, doctor);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async delete(id: number) {
        try {
            const response = await axios.delete<Number>(`${this.base}/doctors/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}